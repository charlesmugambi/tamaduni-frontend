'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { generateSectionsFromRecord } from '../lib/recordToSections'
import type { SectionConfig } from './DynamicSections'

interface Props {
  /** The API‑fetched record of any model/category */
  item: Record<string, any>
}

export default function DynamicRecordDetail({ item }: Props) {
  // Build a map of fieldKey → { label, render? }
  const config: Record<string, SectionConfig<typeof item>> =
    generateSectionsFromRecord(item)

  // Convert to a list so we can preserve ordering in the accordion
  const sections = Object.entries(config).map(([key, { label, render }]) => ({
    key,
    label,
    render,
    value: item[key]
  }))

  // Track which panels are open
  const [open, setOpen] = useState<Record<string, boolean>>({})

  return (
    <div className="text-lg m-auto w-11/12 space-y-4">
      {/* Title or fallback */}
      {item.title && <p className="underline text-xl font-bold">{item.title}</p>}

      {/* Centered image if media[0] exists */}
      {Array.isArray(item.media) && item.media[0] && (
        <Image
          src={item.media[0]}
          width={400}
          height={200}
          alt={item.title || ''}
          className="mx-auto rounded-lg object-cover"
        />
      )}

      {/* Accordion */}
      <div className="p-4">
        {sections.map(({ key, label, render, value }) => (
          <div key={key} className="border-b border-gray-200">
            <button
              onClick={() =>
                setOpen(prev => ({ ...prev, [key]: !prev[key] }))
              }
              className="w-full flex items-center px-3 py-2 text-left transition-colors duration-200"
            >
              <ChevronDown
                className={`w-5 h-5 mr-2 transform transition-transform duration-200 ${
                  open[key] ? 'rotate-180' : 'rotate-0'
                }`}
              />
              <span className="font-bold text-lg">{label}</span>
            </button>
            {open[key] && (
              <div className="pl-8 pb-4 whitespace-pre-wrap">
                {render ? render(value, item) : String(value)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
