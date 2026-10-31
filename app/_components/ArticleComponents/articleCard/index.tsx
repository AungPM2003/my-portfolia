import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ARTICLES_QUERY } from "@/sanity/queries/query";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import ArticleTag from "@/app/_components/ArticleComponents/articleTag"
import EmptyCard from "@/app/_components/ArticleComponents/emptyCard"
import ArticleTimeDate from "@/app/_components/ArticleComponents/articleTimeDate"
import Image from "next/image";
import Link from "next/link";

type componentProps = {
    filter:string
}

export default async function index({filter}:componentProps) {
    const {data:articles} = await sanityFetch({query:ARTICLES_QUERY});
    const filterArticles = articles.filter((article) => article.catergories?.some(item => item.title == filter))
    if(filterArticles.length <= 0) return(
        <EmptyCard filter={filter}/>
    )

    return (
        
        <div className="py-4 w-full grid md:grid-cols-2 gap-2 place-items-center text-white">
            {
                filterArticles.map((article) => (
                    <Link href={`articles/${article.slug?.current}`} key={article._id} className="border border-deep-2 bg-deep-2/40 rounded-lg">
                         <div className="aspect-video">
                         {
                            article?.poster ? 
                            <Image src={urlFor(article.poster).url()} className="object-cover rounded-lg" width={400} height={200} alt={article.title || "Image"}/>:
                            null
                        }
                         </div>
                        <div className="px-4 py-2" >
                            <div className="flex gap-3 py-2">
                                    {article.catergories?.map((catergory) => (
                                        <ArticleTag key={catergory._id} title={catergory.title}/>
                                    ))}
                            </div>
                            <h1 className="text-card text-creamyWhite font-bold py-2">{article?.title}</h1>
                            <ArticleTimeDate publishedAt={article?.publishedAt} timeToRead={article?.timeToRead}/>
                            <div className="text-highlight text-sm flex items-center py-2">Read More <ArrowRightIcon className="h-3 w-3"/></div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
