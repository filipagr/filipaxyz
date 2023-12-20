import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'


import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-blue-500 dark:hover:text-blue-400"
    >
      {children}
    </Link>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
          
          <div class="flex flex-col md:flex-row items-center md:items-end justify-between">

            <div className="w-full md:w-1/2">

              <h6 className="text-sm font-medium text-zinc-400 dark:text-zinc-500 mb-2">Colophon</h6>
              <div className="text-xs font-regular text-zinc-400 dark:text-zinc-500">
                  This website was designed and developed in 2023 by Filipa Ribeiro, using Spotlight Tailwind Template as a base. All assets are hosted by Netlify. Text is set in Manrope, designed by Mikhail Sharanda in 2018, and part of the Google Fonts library :)
              </div>
            </div>


            <div className="flex gap-6 mt-4 md:mt-0 md:items-center">

              <SocialLink
                href="https://twitter.com/heyitsfilipa"
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
              />
              <SocialLink
                href="https://github.com/filipagr"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/filipagribeiro/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>

          </div>
    
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
