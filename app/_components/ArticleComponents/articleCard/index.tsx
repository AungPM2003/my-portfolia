import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ARTICLES_QUERY } from "@/sanity/queries/query";
import ArticleTag from "@/app/_components/ArticleComponents/articleTag"
import Image from "next/image";
import Link from "next/link";



export default async function index() {
    const {data:articles} = await sanityFetch({query:ARTICLES_QUERY});
    return (
        <div className="py-4 w-full grid md:grid-cols-2 gap-2 place-items-center text-white">
            {
                articles.map((article) => (
                    <Link href={`articles/${article.slug?.current}`} key={article._id} className="border border-deep-2 bg-deep-2/40 rounded-lg">
                         {
                            article?.poster ? 
                            <Image src={urlFor(article.poster).url()} className="object-cover rounded-lg " width={400} height={200} alt={article.title || "Image"}/>:
                            null
                        }
                        <div className="px-4 py-2" >
                            <div className="flex gap-3 py-2">
                                    {article.catergories?.map((catergory) => (
                                        <ArticleTag key={catergory._id} title={catergory.title}/>
                                    ))}
                            </div>
                            <h1 className="text-card text-creamyWhite font-bold py-2">{article?.title}</h1>
                            <div className="flex">
                                <div className="flex-1">Date</div>   
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
