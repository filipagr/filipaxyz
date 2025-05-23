import ProjectLayout from '@/components/ProjectLayout'
import { getAllProjects } from '@/lib/projects'

export default async function Layout({ children, params }) {
  try {
    // Import the project data directly from the MDX file
    const { project } = await import(`@/app/projects/${params.slug}/page.mdx`)
    
    if (!project) {
      console.error('No project data found for slug:', params.slug)
      return <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        {children}
      </div>
    }

    // Add the slug to the project data
    const projectWithSlug = {
      ...project,
      slug: params.slug,
    }

    // Debug log
    console.log('Found project:', projectWithSlug.title, 'for slug:', params.slug)

    return (
      <ProjectLayout project={projectWithSlug}>
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