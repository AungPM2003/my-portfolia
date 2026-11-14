import { ARTICLE_QUERY_RESULT } from "@/sanity.types";
import { components } from "@/sanity/portableTextComponent";
import { PortableText } from "next-sanity";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import ArticleTag from "@/app/_components/ArticleComponents/articleTag";
import ArticleTimeDate from "@/app/_components/ArticleComponents/articleTimeDate";
import Link from "next/link";

export default function index({ article }: { article: ARTICLE_QUERY_RESULT }) {
  console.log(article?.headings);
  return (
    <div>
      <Link
        href={"/articles"}
        className="text-greenish flex items-center gap-2 py-2 text-sm/tight tracking-wider"
      >
        <span>
          <ArrowLeftIcon className="h-4 w-4" />
        </span>
        Back to articles
      </Link>
      <div className="pt-6">
        <div className="flex items-center gap-2 py-2">
          {article?.categories?.map((catergory) => (
            <ArticleTag key={catergory._id} title={catergory.title} />
          ))}
        </div>

        <h1 className="text-creamyWhite text-hero/tight py-2 font-bold tracking-wider">
          {article?.title}
        </h1>
        <div className="my-2 py-2">
          <ArticleTimeDate
            publishedAt={article?.publishedAt}
            timeToRead={article?.timeToRead}
          />
        </div>
        <PortableText value={article?.body} components={components} />
      </div>
    </div>
  );
}
