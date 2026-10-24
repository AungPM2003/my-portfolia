"use client";

import { usePathname, useSearchParams,useRouter } from "next/navigation";



export default function CatergoryBtn({title}:{title:string | null}){
    const searchParam = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const current_param = searchParam.get("catergory") ?? "All";

  function handleOnClick(filter:string | null){
    if(!filter) return
    const params = new URLSearchParams(searchParam);
    params.set("catergory",filter)
    router.replace(`${pathname}?${params.toString()}`)
  }

  return(
       <button  className={`px-2 py-2 border border-deep-3 hover:cursor-pointer hover:bg-deep-4 transition duration-300 rounded-md ${current_param === title ? 'bg-deep-3':''}`} onClick={() => handleOnClick(title)}>{title}</button>
  )
}