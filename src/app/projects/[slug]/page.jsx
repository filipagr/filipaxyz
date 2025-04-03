import fs from 'fs'
import path from 'path'

export async function generateStaticParams() {
  const projectDir = path.join(process.cwd(), 'src/app/projects')
  const files = fs.readdirSync(projectDir)

  const slugs = files
    .filter((file) => fs.statSync(path.join(projectDir, file)).isDirectory())
    .map((folderName) => ({
      slug: folderName,
    }))

  console.log('📦 Generating static params for project slugs:', slugs)

  return slugs
}

export default function ProjectPage() {
  return null
}