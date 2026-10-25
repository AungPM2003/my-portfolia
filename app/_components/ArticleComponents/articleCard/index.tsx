import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ARTICLES_QUERY } from "@/sanity/queries/query";
import Image from "next/image";
import Link from "next/link";



export default async function index() {
    const {data:articles} = await sanityFetch({query:ARTICLES_QUERY});
    return (
        <div className="py-4 w-full grid md:grid-cols-2 gap-2 place-items-center text-white">
            {
                articles.map((article) => (
                    <Link href={`articles/${article.slug?.current}`} key={article._id} className="border rounded-lg">
                         {
                            article?.poster ? 
                            <Image src={urlFor(article.poster).url()} className="object-cover rounded-lg " width={400} height={200} alt={article.title || "Image"}/>:
                            null
                        }
                        <h1 className="text-header p-2 ">{article?.title}</h1>
                        <div className="flex p-2">
                            <div className="flex-1">Date</div>
                            <div className="flex gap-3 px-2">
                                {article.catergories?.map((catergory) => (
                                    <span key={catergory.title} className="bg-highlight-alt px-3 rounded-full">{catergory.title}</span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
