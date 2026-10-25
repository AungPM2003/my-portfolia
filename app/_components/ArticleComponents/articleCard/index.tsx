import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ARTICLES_QUERY } from "@/sanity/queries/query";
import { catergory } from "@/sanity/schemaTypes/catergoryType";
import Image from "next/image";
import Link from "next/link";

// import Image from "next/image";

export default async function index() {
    const {data:articles} = await sanityFetch({query:ARTICLES_QUERY});
    console.log(articles)
    return (
        <div className="py-2 w-full grid md:grid-cols-2 gap-2 place-items-center text-white">
            {
                articles.map((article) => (
                    <Link href={`article/${article.slug?.current}`} key={article._id}>
                         {
                            article?.poster ? 
                            <Image src={urlFor(article.poster).url()} className="object-cover rounded-lg " width={400} height={200} alt={article.title || "Image"}/>:
                            null
                        }
                        <h1 className="text-header py-2 ">{article?.title}</h1>
                        <div className="flex py-1">
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
