import glob from 'fast-glob'
import path from 'path'

async function importProject(projectFilename) {
  try {
    const { project } = await import(`@/app/projects/${projectFilename}`)
    
    if (!project) {
      console.warn(`No project data found in ${projectFilename}`)
      return null
    }

    return {
      slug: projectFilename.replace(/(\/page)?\.mdx$/, ''),
      ...project,
    }
  } catch (error) {
    console.error(`Error importing project ${projectFilename}:`, error)
    return null
  }
}

export async function getAllProjects() {
  try {
    const projectFilenames = await glob('*/page.mdx', {
      cwd: path.join(process.cwd(), 'src/app/projects'),
      ignore: ['[slug]/**'], // Explicitly ignore the [slug] directory
    })

    const projects = await Promise.all(projectFilenames.map(importProject))

    // Filter out any null projects and sort by date
    return projects
      .filter(Boolean)
      .sort((a, z) => +new Date(z.date) - +new Date(a.date))
  } catch (error) {
    console.error('Error getting all projects:', error)
    return []
  }
}
