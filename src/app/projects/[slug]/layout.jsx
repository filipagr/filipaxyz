import ProjectLayout from '@/components/ProjectLayout'
import { getAllProjects } from '@/lib/projects'

export default async function Layout({ children, params }) {
  try {
    // Get all projects and find the matching one
    const projects = await getAllProjects()
    const project = projects.find(p => p?.slug === params.slug)
    
    if (!project) {
      console.error('No project data found for slug:', params.slug)
      return <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        {children}
      </div>
    }

    // Debug log
    console.log('Found project:', project.title, 'for slug:', params.slug)

    return (
      <ProjectLayout project={project}>
        {children}
      </ProjectLayout>
    )
  } catch (error) {
    console.error(`Error loading project ${params.slug}:`, error)
    return <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Error Loading Project</h1>
      {children}
    </div>
  }
}