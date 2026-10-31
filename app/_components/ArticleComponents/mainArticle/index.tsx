import { ARTICLE_QUERY_RESULT } from "@/sanity.types";
import { components } from "@/sanity/portableTextComponent";
import { PortableText } from "next-sanity";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import ArticleTag from '@/app/_components/ArticleComponents/articleTag'
import ArticleTimeDate from "@/app/_components/ArticleComponents/articleTimeDate"
import Link from "next/link";

export default function index({article}:{article:ARTICLE_QUERY_RESULT}) {
  return (
    <div>
        <Link href={"/articles"} className="flex items-center gap-2 text-sm/tight tracking-wider text-greenish py-2">
          <span><ArrowLeftIcon className="w-4 h-4"/></span>
          Back to articles
        </Link>
        <div className="pt-6">
          <div className="flex items-center gap-2 py-2">
            {
              article?.catergories?.map((catergory) => (
                <ArticleTag key={catergory._id} title={catergory.title}/>
              ))
            }
          </div>
          
          <h1 className="text-creamyWhite text-hero/tight tracking-wider py-2 font-bold">{article?.title}</h1>
          <div className="py-2 my-2">
            <ArticleTimeDate publishedAt={article?.publishedAt} timeToRead={article?.timeToRead}/>
          </div>
          <PortableText value={article?.body} components={components}/>
        </div>
    </div>
  )
}

