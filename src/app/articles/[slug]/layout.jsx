import { ArticleLayout } from '@/components/ArticleLayout'

export default async function Layout({ children, params }) {
  try {
    // Import the article data directly from the MDX file
    const { article } = await import(`@/app/articles/${params.slug}/page.mdx`)
    
    if (!article) {
      console.error('No article data found for slug:', params.slug)
      return <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        {children}
      </div>
    }

    // Add the slug to the article data
    const articleWithSlug = {
      ...article,
      slug: params.slug,
    }

    // Debug log
    console.log('Found article:', articleWithSlug.title, 'for slug:', params.slug)

    return (
      <ArticleLayout article={articleWithSlug}>
        {children}
      </ArticleLayout>
    )
  } catch (error) {
    console.error(`Error loading article ${params.slug}:`, error)
    return <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Error Loading Article</h1>
      {children}
    </div>
  }
} 