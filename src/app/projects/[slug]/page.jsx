import fs from 'fs'
import path from 'path'
import { getAllProjects } from '@/lib/projects'

export async function generateStaticParams() {
  const projectDir = path.join(process.cwd(), 'src/app/projects')
  const slugDir = path.join(projectDir, '[slug]')
  
  // Get projects from root directory
  const rootFiles = fs.readdirSync(projectDir)
  const rootProjects = rootFiles
    .filter((file) => fs.statSync(path.join(projectDir, file)).isDirectory())
    .filter((dir) => dir !== '[slug]') // Exclude the [slug] directory itself
    .map((folderName) => ({
      slug: folderName,
    }))

  // Get projects from [slug] directory
  const slugFiles = fs.readdirSync(slugDir)
  const slugProjects = slugFiles
    .filter((file) => fs.statSync(path.join(slugDir, file)).isDirectory())
    .map((folderName) => ({
      slug: folderName,
    }))

  // Combine both sets of projects
  return [...rootProjects, ...slugProjects]
}

export async function generateMetadata({ params }) {
  try {
    const projects = await getAllProjects()
    const project = projects.find((p) => p?.slug === params.slug)
    
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
    // Debug log
    console.log('Rendering project page for slug:', params.slug)
    
    // Import both the Content and project data
    const { default: Content, project } = await import(`@/app/projects/${params.slug}/page.mdx`)
    
    // Debug log
    console.log('Successfully loaded MDX content and project data for:', params.slug)
    
    return <Content />
  } catch (error) {
    console.error(`Error loading project content for ${params.slug}:`, error)
    return <div>Project not found</div>
  }
}