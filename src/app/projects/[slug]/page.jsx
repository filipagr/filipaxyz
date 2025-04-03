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

export default function ProjectPage() {
  return null
}