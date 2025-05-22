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
    const { metadata } = await import(`@/app/projects/${params.slug}/page.mdx`)
    return metadata
  } catch (error) {
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
    return <div>Project not found</div>
  }
}