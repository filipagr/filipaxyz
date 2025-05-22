import glob from 'fast-glob'
import path from 'path'

async function importArticle(articleFilename) {
  try {
    const { article } = await import(`@/app/articles/${articleFilename}`)
    
    if (!article) {
      console.warn(`No article data found in ${articleFilename}`)
      return null
    }

    return {
      slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
      ...article,
    }
  } catch (error) {
    console.error(`Error importing article ${articleFilename}:`, error)
    return null
  }
}

export async function getAllArticles() {
  try {
    const articleFilenames = await glob('*/page.mdx', {
      cwd: path.join(process.cwd(), 'src/app/articles'),
      ignore: ['[slug]/**'], // Explicitly ignore the [slug] directory
    })

    const articles = await Promise.all(articleFilenames.map(importArticle))

    // Filter out any null articles and sort by date
    return articles
      .filter(Boolean)
      .sort((a, z) => +new Date(z.date) - +new Date(a.date))
  } catch (error) {
    console.error('Error getting all articles:', error)
    return []
  }
}
