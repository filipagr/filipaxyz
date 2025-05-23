import fs from 'fs'
import path from 'path'

export async function generateStaticParams() {
  const projectDir = path.join(process.cwd(), 'src/app/projects')
  const files = fs.readdirSync(projectDir)

  return files
    .filter((file) => fs.statSync(path.join(projectDir, file)).isDirectory())
    .filter((dir) => dir !== '[slug]') // Exclude the [slug] directory itself
    .map((folderName) => ({
      slug: folderName,
    }))
}

export async function generateMetadata({ params }) {
  try {
    const { project } = await import(`@/app/projects/${params.slug}/page.mdx`)
    
    if (!project) {
      return {
        title: 'Project Not Found',
        description: 'This project could not be found.'
      }
    }

    return {
      title: project.title,
      description: project.description,
    }
  } catch (error) {
    console.error(`Error loading project metadata for ${params.slug}:`, error)
    return {
      title: 'Project Not Found',
      description: 'This project could not be found.'
    }
  }
}

export default async function ProjectPage({ params }) {
  try {
    const { default: Content } = await import(`@/app/projects/${params.slug}/page.mdx`)
    return <Content />
  } catch (error) {
    console.error(`Error loading project content for ${params.slug}:`, error)
    return <div>Project not found</div>
  }
}