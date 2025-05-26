import glob from 'fast-glob'
import path from 'path'

async function importProject(projectFilename) {
  try {
    console.log('Attempting to import project:', projectFilename)
    // Import the project module
    const { project } = await import(`@/app/projects/${projectFilename}`)
    
    if (!project) {
      console.warn(`No project data found in ${projectFilename}`)
      return null
    }

    // Get the directory name from the path, handling both root and [slug] projects
    const parts = projectFilename.split('/')
    // If the path includes [slug], get the directory after it, otherwise get the first directory
    const slug = parts.includes('[slug]') ? parts[parts.length - 2] : parts[0]
    
    console.log('Imported project:', { filename: projectFilename, slug, title: project.title })

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
    // Get all MDX files in both root and [slug] directories
    const projectFilenames = await glob(['*/page.mdx', '[slug]/*/page.mdx'], {
      cwd: path.join(process.cwd(), 'src/app/projects'),
    })

    console.log('Found project files:', projectFilenames)

    // Import all projects
    const projects = await Promise.all(
      projectFilenames
        .filter(filename => !filename.startsWith('[slug]/[')) // Only exclude dynamic route template files
        .map(importProject)
    )

    // Debug log
    console.log('Processed projects:', projects.map(p => ({ title: p?.title, slug: p?.slug })))

    // Filter out any null projects and sort by date
    const sortedProjects = projects
      .filter(Boolean)
      .sort((a, z) => new Date(z.date) - new Date(a.date))

    console.log('Final sorted projects:', sortedProjects.map(p => ({ title: p.title, slug: p.slug })))
    return sortedProjects
  } catch (error) {
    console.error('Error getting all projects:', error)
    return []
  }
}
