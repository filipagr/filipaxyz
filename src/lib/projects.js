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

    // Get the directory name from the path (e.g., "ethlisbon" from "ethlisbon/page.mdx")
    const slug = projectFilename.split('/')[0]

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
    // Get all MDX files in project directories
    const projectFilenames = await glob(['*/page.mdx'], {
      cwd: path.join(process.cwd(), 'src/app/projects'),
    })

    // Import all projects
    const projects = await Promise.all(
      projectFilenames
        .filter(filename => !filename.startsWith('[')) // Exclude dynamic route files
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
