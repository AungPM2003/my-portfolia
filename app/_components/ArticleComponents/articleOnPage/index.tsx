"use client";

import { slugify } from "@/app/lib/slugify";
import { ARTICLE_QUERY_RESULT } from "@/sanity.types";
import { ChevronDownIcon,ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
type indexProps = {
    article:ARTICLE_QUERY_RESULT
}
export default function Index({article}:indexProps) {
    const [isHidden,setIsHidden] = useState(true);
    function onClickHandler(){
        setIsHidden((isHidden) => !isHidden)
    }

    return (
        <div className="hidden md:block sticky top-0" >
            <h3 className="text-tag text-highlight py-1 px-2 cursor-pointer flex  items-center gap-3" onClick={onClickHandler}>On this page <span>{isHidden ? <ChevronDownIcon className="w-4 h-4"/>: <ChevronUpIcon className="w-4 h-4"/>}</span></h3>
                <div className={`flex flex-col border-l border-l-[#A7B6C8] ${isHidden ? "hidden" : "block" }`}>
                    {
                        article?.headings?.map((head) => (
                            <a href={`#${slugify(head?.text || "")}`} key={head?._key} className="text-creamyWhite font-bold text-sm/tight p-2 ">{head?.text}</a>
                        ))
                    }
                </div>
        </div>
  )
}
