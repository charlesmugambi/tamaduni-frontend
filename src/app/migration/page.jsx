"use client"
import { useRouter } from "next/navigation";
const Migration = () => {
const router= useRouter()
    const handleClick=()=>{
       router.push("/migration/articles")
    }
    return ( 
        <div className="mx-10">
            <div className="flex ">
                <p className="bg-yellow-300 p-3 mr-2">Hausa-Fulani</p>
                <p className="bg-yellow-300 p-3 mr-2">Afrostatic</p>
                <p className="bg-yellow-300 p-3 mr-2">Cushitic</p>
                <p onClick={handleClick} className="bg-yellow-300 p-3 mr-2">Bantu</p>
            </div>
            <h1 className=" font-bold text-lg">Timeline Synopsis</h1>
            <h2 className="my-4">3000-3500 BCE</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h1 className="font-bold text-lg my-4">Bantu</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

        </div>
     );
}
 
export default Migration;