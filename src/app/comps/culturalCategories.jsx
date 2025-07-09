'use client'
import { useRouter } from 'next/navigation'
import { Landmark, Trees, UsersRound, Factory } from 'lucide-react' // Or any icon set you prefer

const CulturalCategories = () => {
  const router = useRouter()

  const handleNaturalHeritage = () => {
   
    router.push('/cultural_mapping/natural-heritage') // example
  }

  const items = [
    { label: 'Community Cultural Organizations', icon: <UsersRound /> },
    { label: 'Cultural Industries', icon: <Factory /> },
    { label: 'Natural Heritage', icon: <Trees />, onClick: handleNaturalHeritage },
    { label: 'Cultural Festivals & Events', icon: <Landmark /> },
  ]

  return (
    <div className="flex flex-row  justify-center gap-6 m-4 p-4 border rounded-xl w-full">
      {items.map((item, idx) => (
       <div
       key={idx}
       onClick={item.onClick}
       className="flex flex-col items-center justify-center w-40 h-32 cursor-pointer rounded-lg transition hover:bg-amber-400"
     >
       <div className="text-black mb-2">{item.icon}</div>
       <p className="text-center text-sm font-medium hover:bg-amber-400">{item.label}</p>
     </div>
     
      ))}
    </div>
  )
}

export default CulturalCategories
