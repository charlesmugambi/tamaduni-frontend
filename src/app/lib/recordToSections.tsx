import type { SectionConfig } from '../components/DynamicSections'
import React from 'react'

/**
 * Inspects any flat record and builds a SectionConfig for each non-null field.
 */
export function generateSectionsFromRecord<T extends Record<string, any>>(
  item: T
): Record<string, SectionConfig<T>> {
  const sections: Record<string, SectionConfig<T>> = {}

  for (const [key, value] of Object.entries(item)) {
    if (value == null) continue

    // Build a human‑readable label from the key
    const label = key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (c: string) => c.toUpperCase())

    let render: SectionConfig<T>['render'] | undefined

    if (Array.isArray(value)) {
      // Arrays → bullet lists
      render = (arr: any[]) => (
        <ul className="list-disc pl-5">
          {arr.map((v: any, i: number) => (
            <li key={i}>{String(v)}</li>
          ))}
        </ul>
      )
    } else if (typeof value === 'boolean') {
      // Booleans → Yes/No
      render = (b: boolean) => (b ? 'Yes' : 'No')
    } else if (typeof value === 'string' && /\d{4}-\d{2}-\d{2}T/.test(value)) {
      // ISO date‑strings → localized date
      render = (dt: string) => new Date(dt).toLocaleString()
    } else if (key === 'media' && Array.isArray(value)) {
      // Special case: media URLs array → image grid
      render = (medias: string[]) => (
        <div className="grid grid-cols-2 gap-4">
          {medias.map((url: string, i: number) => (
            <img key={i} src={url} alt="" className="rounded-lg" />
          ))}
        </div>
      )
    }

    sections[key] = { label, render }
  }

  return sections
}
