'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface SectionConfig<T> {
  label: string
  render?: (value: any, item: T) => React.ReactNode
}

export function DynamicSections<T extends object>({
  item,
  sections
}: {
  item: T
  sections: Record<string, SectionConfig<T>>
}) {
  const [open, setOpen] = useState<Record<string, boolean>>({})
  return (
    <div className="space-y-4">
      {Object.entries(sections).map(([key, cfg]) => {
        const value = (item as any)[key]
        if (value == null) return null
        const content = cfg.render ? cfg.render(value, item) : String(value)
        return (
          <div key={key} className="border-b">
            <button
              onClick={() => setOpen(o => ({ ...o, [key]: !o[key] }))}
              className="flex justify-between w-full py-2"
            >
              <span className="font-semibold">{cfg.label}</span>
              <ChevronDown className={`transform ${open[key] ? 'rotate-180' : ''}`} />
            </button>
            {open[key] && <div className="pl-4 pb-2 whitespace-pre-wrap">{content}</div>}
          </div>
        )
      })}
    </div>
  )
}
