'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ProjectLayout({ project, children }) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to projects"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}

          <div> {/* ✅ Replaced <project> with <div> */}
            <header className="flex flex-col">
              <h1 className="text-4xl font-regular tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {project.title}
              </h1>

              <div className="mt-8 flex flex-col text-sm text-zinc-600 dark:text-zinc-400 md:flex-row md:justify-between">
                <div>
                  <h6 className="text-xs">Client</h6>
                  <p className="font-medium">{project.client}</p>
                </div>

                <div>
                  <h6 className="text-xs mt-4 md:mt-0">Role</h6>
                  <p className="font-medium">{project.role}</p>
                </div>

                <div>
                  <h6 className="text-xs mt-4 md:mt-0">Duration</h6>
                  <p className="font-medium">{project.duration}</p>
                </div>
              </div>
            </header>

            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </div>
        </div>
      </div>
    </Container>
  )
}
