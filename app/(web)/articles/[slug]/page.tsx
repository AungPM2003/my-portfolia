import { sanityFetch } from "@/sanity/lib/live";
import { ARTICLE_QUERY } from "@/sanity/queries/query";

import MainArticle from '@/app/_components/ArticleComponents/mainArticle'
import Link from "next/link";
import { slugify } from "@/app/lib/slugify";
import { toPlainText } from "next-sanity";
interface PageProps {
    params:Promise<{slug:"title"}>
}
export default async function page({
    params
}:PageProps) {
    //quering for the individual articles
    const {data:article} = await sanityFetch({query:ARTICLE_QUERY,params:params})
    
    return (
        <>
            <div className="py-2">
                <MainArticle article={article}/>
            </div>
            <div>
                <h3 className="text-tag text-highlight py-1 px-2">On this page</h3>
                <div className="flex flex-col border-l border-l-[#A7B6C8]">
                {
                    article?.headings?.map((head) => (
                        <a href={`#${slugify(head?.text || "")}`} key={head?._key} className="text-creamyWhite font-bold text-sm/tight p-2 ">{head?.text}</a>
                        
                    ))
                }
                </div>
            </div>
        </>
      )
}
