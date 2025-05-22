import fs from 'fs'
import path from 'path'

export async function generateStaticParams() {
  const projectDir = path.join(process.cwd(), 'src/app/projects')
  const files = fs.readdirSync(projectDir)

  return files
    .filter((file) => fs.statSync(path.join(projectDir, file)).isDirectory())
    .map((folderName) => ({
      slug: folderName,
    }))
}

export async function generateMetadata({ params }) {
  const { metadata } = await import(`@/app/projects/${params.slug}/page.mdx`)
  return metadata
}

export default async function ProjectPage({ params }) {
  const { default: Content } = await import(`@/app/projects/${params.slug}/page.mdx`)
  return <Content />
}