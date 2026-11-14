import Link from "next/link";
import { ARTICLES_QUERY_RESULT } from "@/sanity.types";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import ArticleTag from "@/app/_components/ArticleComponents/articleTag";
import textSplitter from "@/app/lib/textSplitter";
type Props = {
  children: React.ReactNode;
  articles: ARTICLES_QUERY_RESULT;
  category: string;
};
export default async function Index({ children, articles, category }: Props) {
  const filterArticles = articles.filter((article) =>
    article.catergories?.some((item) => item.title == category),
  );

  return (
    <div className="flex flex-col pt-2">
      {children}
      <div className="scrollbar-thumb-deep-3 scrollbar-track-deep-2 flex scrollbar-thin gap-4 overflow-x-auto py-4">
        {filterArticles.map((article) => (
          <Link
            href={`articles/${article.slug?.current}`}
            key={article._id}
            className="border-deep-2 bg-deep-2/40 -ml-25 flex h-60 w-60 shrink-0 origin-center flex-col gap-4 rounded-lg border p-4 backdrop-blur-sm transition-all duration-200 will-change-transform first:ml-0 hover:mr-11 hover:-ml-17.5 hover:-translate-20 hover:-translate-y-2 hover:rotate-6 first:hover:ml-25 first:hover:translate-y-0"
          >
            <div className="flex gap-4">
              {article.catergories?.map((catergory) => (
                <ArticleTag key={catergory._id} title={catergory.title} />
              ))}
            </div>
            <h1 className="text-card/tight text-creamyWhite font-bold tracking-tight">
              {article.title}
            </h1>
            <p className="text-body/tight tracking-tight">
              {textSplitter({
                text: article?.body?.children?.text ?? "",
                startpoint: 0,
                endpoint: 5,
                replaceItem: "...",
              })}
            </p>
            <span className="text-highlight flex items-center text-sm">
              Read More <ArrowRightIcon className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
