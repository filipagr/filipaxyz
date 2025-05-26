import ProjectLayout from '@/components/ProjectLayout'
import { getAllProjects } from '@/lib/projects'

export default async function Layout({ children, params }) {
  try {
    console.log('Layout rendering for slug:', params.slug)
    // Get all projects and find the matching one
    const projects = await getAllProjects()
    console.log('Available projects in layout:', projects.map(p => ({ title: p.title, slug: p.slug })))
    
    const project = projects.find(p => p?.slug === params.slug)
    console.log('Found project for layout:', project ? { title: project.title, slug: project.slug } : 'Not found')
    
    if (!project) {
      console.error('No project data found for slug:', params.slug)
      return <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        {children}
      </div>
    }

    // Debug log
    console.log('Applying layout to project:', project.title, 'with slug:', params.slug)

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