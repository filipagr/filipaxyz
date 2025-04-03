import fs from 'fs'
import path from 'path'

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'app/projects'))
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace('.mdx', ''),
    }))
}

export default function ProjectPage() {
  return null
}
