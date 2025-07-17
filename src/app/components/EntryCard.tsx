'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { BaseCategory } from '../data/afro-celebration/craftCategories'  // more generic than CraftCategory

interface Props {
  item: Record<string, any>
  category: BaseCategory
  moduleKey: string
}

export default function EntryCard({ item, category, moduleKey }: Props) {
  const router = useRouter()

  const title = item[category.previewFields[0]] || 'Untitled'
  const subtitle = item[category.previewFields[1]] || ''
  const image = Array.isArray(item.media) ? item.media[0] : null

  return (
    <div
      className="flex bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition"
      onClick={() =>
        router.push(`/afrocelebration/${moduleKey}/${category.key}/${item.id}`)
      }
    >
      {/* Thumbnail */}
      <div className="w-24 h-24 relative flex-none">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="flex-1 p-3 flex justify-between items-start">
        <div>
          <h4 className="text-sm font-bold">{title}</h4>
          <p className="text-xs text-gray-600">{subtitle}</p>
        </div>
        <ChevronRight className="text-gray-500" size={16} />
      </div>
    </div>
  )
}
