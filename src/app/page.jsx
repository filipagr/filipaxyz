import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { getAllProjects } from '@/lib/projects'
import { formatDate } from '@/lib/formatDate'
import Image from 'next/image'
import { Card } from '@/components/Card'

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
  );
}

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-regular tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Hello, I&apos;m Filipa —
          </h1>
          
          <p className="text-3xl font-regular tracking-tight text-zinc-400 dark:text-zinc-400 sm:text-4xl">
            a designer passionate about people, technology, and building meaningful products.
          </p>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-1">
          <div className="flex flex-col gap-16">
            {projects.map((project) => (
              project && <Project key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
