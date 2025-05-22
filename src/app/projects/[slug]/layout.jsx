import ProjectLayout from '@/components/ProjectLayout'

export default async function Layout({ children, params }) {
  try {
    const { project } = await import(`@/app/projects/${params.slug}/page.mdx`)
    
    if (!project) {
      return <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        {children}
      </div>
    }

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