import { getAllArticles } from '@/lib/articles'

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }) {
  const articles = await getAllArticles()
  const article = articles.find((article) => article.slug === params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    }
  }

  return {
    title: article.title,
    description: article.description,
  }
}

export default async function ArticlePage({ params }) {
  try {
    // Debug log
    console.log('Rendering article page for slug:', params.slug)
    
    // Import both the Content and article data
    const { default: Content, article } = await import(`@/app/articles/${params.slug}/page.mdx`)
    
    // Debug log
    console.log('Successfully loaded MDX content and article data for:', params.slug)
    
    return <Content />
  } catch (error) {
    console.error(`Error loading article content for ${params.slug}:`, error)
    return <div>Article not found</div>
  }
} 