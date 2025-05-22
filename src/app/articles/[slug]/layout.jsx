import { ArticleLayout } from '@/components/ArticleLayout'
import { getAllArticles } from '@/lib/articles'

export default async function Layout({ children, params }) {
  const articles = await getAllArticles()
  const article = articles.find((article) => article.slug === params.slug)

  if (!article) {
    return <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
      {children}
    </div>
  }

  return (
    <ArticleLayout article={article}>
      {children}
    </ArticleLayout>
  )
} 