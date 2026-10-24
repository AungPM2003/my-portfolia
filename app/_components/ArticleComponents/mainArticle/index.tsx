import { ARTICLE_QUERY_RESULT } from "@/sanity.types";
import { components } from "@/sanity/portableTextComponent";
import { PortableText } from "next-sanity";
export default function index({article}:{article:ARTICLE_QUERY_RESULT}) {
  return (
    <div className="px-3">
        <h1 className="text-highlight-alt text-3xl py-2">{article?.title}</h1>
        <PortableText value={article?.body} components={components}/>
    </div>
  )
}

