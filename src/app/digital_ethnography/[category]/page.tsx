'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import type { Metadata } from 'next'
import CategoryCard from '../../components/CategoryCard'
import { digitalEthnographyCategoriesList } from '../../data/digitalEthnography/ethnographyCategoryList'

interface Article {
  id: number
  media: string
  [key: string]: any
}



export default function ArticlesPage() {
  const params = useParams()
  const { category } = params
  const categoryConfig = digitalEthnographyCategoriesList.find(
    (c) => c.model === category
  )

  const [articles, setArticles] = useState<Article[]>([])  
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!categoryConfig) return
    const fetchArticles = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/ethnography/${categoryConfig.model}?page=1`
        )
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setArticles(data.items || data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [categoryConfig])

  if (!categoryConfig) return <p className="p-4 text-red-600">Invalid category</p>
  if (loading) return <p className="p-4">Loading...</p>
  if (error) return <p className="p-4 text-red-600">{error}</p>

  const [textField, imageField] = categoryConfig.previewFields

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {categoryConfig.label}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <CategoryCard
            key={article.id}
            category={{
              key: article.id.toString(),
              label: article[textField] as string,
              model: categoryConfig.model,
              previewFields: categoryConfig.previewFields,
              synopsis: article[textField] as string,
              imageSrc: article[imageField] || '/placeholder.jpg',
            }}
            href={`/digital_ethnography/${categoryConfig.model}/${article.id}`}
          />
        ))}
      </div>
    </section>
  )
}
