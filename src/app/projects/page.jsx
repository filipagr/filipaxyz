import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllProjects } from '@/lib/projects'

function Project({ project }) {
  if (!project?.title || !project?.slug) {
    return null
  }

  return (
    <Card as="project">
      {project.thumbnail && (
        <Card.Image 
          className="rounded-2xl" 
          src={project.thumbnail} 
          alt={project.title || 'Project thumbnail'} 
        />
      )}

      <Card.Title href={`/projects/${project.slug}`}>
        {project.title}
      </Card.Title>

      {project.description && (
        <Card.Description>{project.description}</Card.Description>
      )}

      <Card.Cta>Read case study</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Selected projects',
}

export default async function ProjectsIndex() {
  const projects = await getAllProjects()

  return (
    <SimpleLayout
      title="A collection of my recent work in design and technology."
    >
      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          project && <Project key={project.slug} project={project} />
        ))}
      </div>
    </SimpleLayout>
  )
} 
