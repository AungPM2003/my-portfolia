
import Link from "next/link"
import { ARTICLES_QUERY_RESULT, TITLE_QUERY_RESULT } from "@/sanity.types"
type Props = {
    children:React.ReactNode,
    articles:ARTICLES_QUERY_RESULT,
}
export default function Index({children,articles}:Props){
    
    return (
        <div className="py-2">
        {children}
        <div className="py-6 flex gap-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-deep-3 scrollbar-track-deep-2 ">
            {
                articles.map((article) => (
                    <Link href={`articles/${article.slug?.current}`} key={article._id} className="p-4 w-60 h-60 shrink-0  border border-deep-2 bg-deep-2/40 hover:-ml-17.5 hover:rotate-6 hover:-translate-y-2 first:hover:translate-y-0 first:hover:ml-25 hover:-translate-20 hover:mr-11 first:ml-0 -ml-25 origin-center transition-all will-change-transform duration-200 rounded-lg flex flex-col gap-4">
                        <div className="flex gap-4">
                            {article.catergories?.map((catergory) =>(
                                <span className="bg-hightlight/75 px-2 py-1 rounded-full text-tag text-tagText " key={catergory.title}>{catergory.title}</span>
                            ))}
                        </div>
                        <h1 className="text-header/tight tracking-tight">{article.title}</h1>
                        
                    </Link>
                ))
            }
        </div>
        </div>     
    )
}