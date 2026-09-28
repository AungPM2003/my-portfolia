"use client";

import { Catergory } from "@/sanity/types";
import { usePathname, useSearchParams,useRouter } from "next/navigation";


type CatergoryBtnProps = {
    catergory:Catergory
}

export default function CatergoryBtn({catergory}:CatergoryBtnProps){
    const searchParam = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const current_param = searchParam.get("catergory");
  function handleOnClick(filter){
    const params = new URLSearchParams(searchParam);
    params.set("catergory",filter)
    router.replace(`${pathname}?${params.toString()}`)
  }

  return(
       <button  className={`px-2 py-2 border border-deep-3 hover:cursor-pointer hover:bg-deep-4 transition duration-300 rounded-md ${current_param === catergory.title ? 'bg-deep-3':''}`} onClick={() => handleOnClick(catergory.title)}>{catergory.title}</button>
  )
}