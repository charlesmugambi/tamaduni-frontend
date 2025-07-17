import api from '../../../../lib/api'
import DynamicRecordDetail from '../../../../components/DynamicRecordDetail'
import { useParams } from 'next/navigation'

export default async function DetailPage() {
  const { moduleKey, categoryKey, entryId } = useParams() as {
    moduleKey: string
    categoryKey: string
    entryId: string
  }

  // Fetch the flat record from your API:
  // GET /afrocelebration/{categoryKey}/{entryId}
  const res = await api.get<Record<string, any>>(
    `/afrocelebration/${categoryKey}/${entryId}`
  )
  const item = res.data

  return (
    <div className="max-w-3xl mx-auto p-6">
      <DynamicRecordDetail item={item} />
    </div>
  )
}
