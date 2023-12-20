import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}



function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}



export const metadata = {
  title: 'About',
  description:
    'Filipa',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Picture of Filipa drinking a Coconut Water."
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />

<Button href="@/files/CV_FilipaRibeiro_Dec2023.pdf" variant="secondary" className="group mt-6 w-full">
Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-3xl font-regular tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          I&apos;m a Product Designer with a background in Graphic Design, currently based in Portugal.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I have always been very interested in people: their thoughts, emotions and reactions in different situations. Design is the way I have found to explore this interest and to try to make the world a better place.
            </p>
            <p>
            When I am not working or studying, I&apos;ll probably be obsessing over something random, like ways to make great coffee, baking bread, Joni Mitchell or how it must be to live on a boat.
            </p>
            <p>
            At the moment, I&apos;m exploring the potential of blockchain technologies and helping out web3 ventures at <a href="https://subvisual.com/">Subvisual</a>. And I&apos;m also training for my fourth marathon in February, 2024.
            </p>
          </div>

      

        </div>

      </div>

    </Container>

  )
}
