import glob from 'fast-glob'
import path from 'path'

async function importProject(projectFilename) {
  try {
    // Import the project module
    const { project } = await import(`@/app/projects/${projectFilename}`)
    
    if (!project) {
      console.warn(`No project data found in ${projectFilename}`)
      return null
    }

    // Get the directory name from the path (e.g., "ethlisbon" from "ethlisbon/page.mdx" or "[slug]/ethlisbon/page.mdx")
    const parts = projectFilename.split('/')
    const slug = parts[parts.length - 2] // Get the directory name before page.mdx

    // Return the project with its slug
    return {
      ...project,
      slug,
    }
  } catch (error) {
    console.error(`Error importing project ${projectFilename}:`, error)
    return null
  }
}

export async function getAllProjects() {
  try {
    // Get all MDX files in project directories, including those in [slug]
    const projectFilenames = await glob(['*/page.mdx', '[slug]/*/page.mdx'], {
      cwd: path.join(process.cwd(), 'src/app/projects'),
    })

    // Import all projects
    const projects = await Promise.all(
      projectFilenames
        .filter(filename => !filename.startsWith('[slug]/[')) // Exclude dynamic route template files
        .map(importProject)
    )

    // Debug log
    console.log('Found projects:', projects.map(p => ({ title: p?.title, slug: p?.slug })))

    // Filter out any null projects and sort by date
    return projects
      .filter(Boolean)
      .sort((a, z) => new Date(z.date) - new Date(a.date))
  } catch (error) {
    console.error('Error getting all projects:', error)
    return []
  }
}
