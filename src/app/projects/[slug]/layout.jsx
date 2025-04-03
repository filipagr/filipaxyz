import { ProjectLayout } from '@/components/ProjectLayout'

export default function Layout({ children, metadata }) {
  const project = metadata?.project ?? {}

  return (
    <ProjectLayout project={project}>
      {children}
    </ProjectLayout>
  )
}