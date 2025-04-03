import { ProjectLayout } from '@/components/ProjectLayout'

export default function Layout({ children, metadata }) {
  return (
    <ProjectLayout project={metadata.project}>
      {children}
    </ProjectLayout>
  )
}
