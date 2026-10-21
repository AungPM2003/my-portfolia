import { components } from "@/sanity/portableTextComponent";
import { PortableText } from "next-sanity";
import HighLighter from "../../SyntaxHighlighter";
export default function index({article}) {
  console.log(article)
  return (
    <div>
        <h1>{article.title}</h1>
        <PortableText value={article.body} components={components}/>
    </div>
  )
}

