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
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-400"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
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
  description: 'Filipa',
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

            <a 
              href="/files/CV_FilipaRibeiro_Dec2023.pdf" 
              download="CV_FilipaRibeiro.pdf"
              className="group mt-6 w-full inline-flex items-center justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
            >
              Download CV
              <ArrowDownIcon className="ml-2 h-4 w-4 stroke-zinc-400 transition group-hover:stroke-zinc-600 dark:group-hover:stroke-zinc-50" />
            </a>
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
            I hold a BA (Hons) in Graphic Communication Design from Central Saint Martins, University of the Arts London. 
            </p>
            <p>
              Building products that are thoughtful and well-crafted is something I genuinely enjoy. I&apos;m drawn to the full product development journey: from early discovery to the creation of polished interfaces. Designers should be involved in product strategy discussions, not just designing what&apos;s asked of us, but questioning the why behind the decisions. There&apos;s a deep satisfaction in crafting interfaces that are not only intuitive and solve real problems, but also feel delightful through visual detail and care. When there&apos;s a high level of attention to detail, people might not notice each element, but they do feel that everything just works, and paraphrasing <a href="https://youtu.be/wLb9g_8r-mE?si=_gObT8iz3nfY8O5T" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition">Jony Ive</a>: they can sense that someone cared about them.
            </p>
            <p>
              When I am not working or studying, I&apos;ll probably be obsessing over something random, like ways to make great coffee, baking bread, Joni Mitchell or how it must be to live on a boat.
            </p>
            <p>
              At the moment, I&apos;m exploring the potential of blockchain technology and decentralized storage at <a href="https://fil.org/" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition">Filecoin Foundation</a>. Previously, I was at <a href="https://subvisual.com/" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition">Subvisual</a>, helping early-stage web3 startups go from 0 to 1.
            </p>
            <p>
              I&apos;m also training for my seventh marathon in September, 2025.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
