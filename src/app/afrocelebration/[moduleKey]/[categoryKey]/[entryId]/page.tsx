'use client'

import React, { useEffect, useState } from 'react'
import api from '../../../../lib/api'
import DynamicRecordDetail from '../../../../components/DynamicRecordDetail'
import { useParams } from 'next/navigation'

export default function DetailPage() {
  // get params (hook call must be synchronous and unconditional)
  const { categoryKey, entryId } = useParams() as {
    categoryKey?: string
    entryId?: string
  }

  // local state (always declared)
  const [item, setItem] = useState<Record<string, unknown> | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Guard early but still inside effect (hooks already run above)
    if (!categoryKey || !entryId) {
      setError('Missing category or entry id')
      setLoading(false)
      return
    }

    const controller = new AbortController()
    const signal = controller.signal

    async function fetchItem() {
      setLoading(true)
      setError(null)

      try {
        // typed as Record<string, unknown> to avoid `any`
        const res = await api.get<Record<string, unknown>>(
          `/afrocelebration/${categoryKey}/${entryId}`,
          { signal } as unknown as object // pass through AbortController if your api wrapper supports it
        )

        // res.data can be any shape; we keep it as Record<string, unknown>
        setItem((res as { data: Record<string, unknown> }).data ?? null)
      } catch (err) {
        if ((err as any)?.name === 'AbortError') {
          // aborted, ignore
          return
        }
        console.error(err)
        const message =
          err && typeof err === 'object' && 'message' in (err as Record<string, unknown>)
            ? String((err as Record<string, unknown>).message)
            : 'Failed to load item'
        setError(message)
      } finally {
        setLoading(false)
      }
    }

    fetchItem()

    return () => {
      controller.abort()
    }
  }, [categoryKey, entryId])

  return (
    <div className="max-w-3xl mx-auto p-6">
      {loading ? (
        <p className="text-center py-10">Loading…</p>
      ) : error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : item ? (
        <DynamicRecordDetail item={item} />
      ) : (
        <p className="text-center py-10">No item found.</p>
      )}
    </div>
  )
}
