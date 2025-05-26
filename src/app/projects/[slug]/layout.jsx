import ProjectLayout from '@/components/ProjectLayout'
import { getAllProjects } from '@/lib/projects'

export default async function Layout({ children, params }) {
  try {
    let project;
    
    try {
      // First try to import from root projects directory
      const importedProject = await import(`@/app/projects/${params.slug}/page.mdx`);
      project = importedProject.project;
    } catch (e) {
      // If that fails, try importing from [slug] directory
      const importedProject = await import(`@/app/projects/[slug]/${params.slug}/page.mdx`);
      project = importedProject.project;
    }
    
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