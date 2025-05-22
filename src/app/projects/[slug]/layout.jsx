import ProjectLayout from '@/components/ProjectLayout'

export default async function Layout({ children, params }) {
  const { project } = await import(`../../projects/${params.slug}/page.mdx`)

  return (
    <ProjectLayout project={project}>
      {children}
    </ProjectLayout>
  )
}