"use client"
import { useRouter } from "next/navigation";
import { kingdomStates } from "../dat/africanCivilizationData";

export default  function Civilization ({params}){
  const {id}=params
  const router =useRouter()
  const kingdom=kingdomStates.find((kingdom)=>kingdom.id===id)

  const handleClick=()=>{
    router.push(`/african_civilization/african_kingdoms`)
  }
    return ( 
        <div className="mx-5">
            <h1 className="font-bold text-3xl my-3">Timeline Synopsis</h1>
            <p className="text-xl">3000-3500BCE</p>
            <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="text-xl font-bold ">
                <h2 className="text-3xl my-3">Kingdom Nation States</h2>
              { kingdomStates.map((kingdom, id)=>(
                <h1 onClick={()=>handleClick(kingdom)} key={id} className="text-xl  mb-4">{kingdom.title}</h1>
              ))}
                    
                
               
            </div>
        </div>
     );
}
