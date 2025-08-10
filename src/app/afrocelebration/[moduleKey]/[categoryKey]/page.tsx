'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { modulesConfig, BaseCategory } from '../../../data/afro-celebration/craftCategories'
import api from '../../../lib/api'
import EntryCard from '../../../components/EntryCard'
import AfricanFlagsCarousel from '../../../comps/flags'
import AfroCelebrationCarousel from '@/app/components/AfroCelebrationCarousel'

type Entry = {
  id: string | number
  [key: string]: unknown
}

export default function ModuleBrowser() {
  const router = useRouter()
  const params = useParams() as {
    moduleKey: string
    categoryKey?: string
  }
  const { moduleKey, categoryKey } = params

  const categories: BaseCategory[] = modulesConfig[moduleKey] || []

  const [entries, setEntries] = useState<Entry[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  
  const decodedLabel = categoryKey
    ? decodeURIComponent(categoryKey)
    : categories[0].label

  const activeCategory: BaseCategory =
    categories.find(cat => cat.label === decodedLabel) || categories[0]

  useEffect(() => {
    async function fetchEntries() {
      setLoading(true)
      setError(null)
      try {
        const path = `/afrocelebration/${activeCategory.key}/?page=0`
        const res = await api.get<{ results: Entry[] }>(path)
        setEntries(Array.isArray(res.data) ? res.data : res.data.results || [])
      } catch (err: unknown) {
        console.error(err)
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Failed to load entries')
        }
      } finally {
        setLoading(false)
      }
    }
    fetchEntries()
  }, [moduleKey, activeCategory.key])

  if (!categories.length) {
    return <p className="p-4">Unknown module: {moduleKey}</p>
  }

  return (
    <div className="p-4 space-y-6">
      <AfricanFlagsCarousel />
      <AfroCelebrationCarousel />

      {/* Tabs */}
      <div className="flex space-x-3 overflow-x-auto p-2">
        {categories.map(cat => {
          const isActive = cat.label === activeCategory.label
          return (
            <button
              key={cat.label}
              onClick={() =>
                router.push(
                  `/afrocelebration/${moduleKey}/${encodeURIComponent(cat.label)}`
                )
              }
              className={`shrink-0 px-3 py-1 rounded-lg font-semibold ${
                isActive ? 'bg-amber-400 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      <h2 className="text-xl font-bold">{activeCategory.label}</h2>

      {loading ? (
        <p>Loading…</p>
      ) : error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {entries.slice(0, 6).map(entry => (
            <EntryCard
              key={entry.id}
              item={entry}
              category={activeCategory}
              moduleKey={moduleKey}
            />
          ))}
        </div>
      )}
    </div>
  )
}
