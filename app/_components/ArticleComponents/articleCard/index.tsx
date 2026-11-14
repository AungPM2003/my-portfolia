import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ARTICLES_QUERY } from "@/sanity/queries/query";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import ArticleTag from "@/app/_components/ArticleComponents/articleTag";
import EmptyCard from "@/app/_components/ArticleComponents/emptyCard";
import ArticleTimeDate from "@/app/_components/ArticleComponents/articleTimeDate";
import Image from "next/image";
import Link from "next/link";

type componentProps = {
  filter: string;
};

export default async function index({ filter }: componentProps) {
  const { data: articles } = await sanityFetch({ query: ARTICLES_QUERY });
  const filterArticles = articles.filter((article) =>
    article.catergories?.some((item) => item.title == filter),
  );
  if (filterArticles.length <= 0) return <EmptyCard filter={filter} />;

  return (
    <div className="grid gap-2 py-4 text-white min-[500px]:grid-cols-2 xl:grid-cols-3">
      {filterArticles.map((article) => (

        <Link href={`articles/${article.slug?.current}`} className="border-deep-2 bg-deep-2/40 rounded-lg border flex flex-col gap-2"
          key={article._id}>

          {article?.poster ? (
            <Image
              src={urlFor(article.poster)
                .width(400)
                .height(200)
                .auto("format")
                .url()}
              className="w-full rounded-lg object-cover"
              width={400}
              height={200}
              alt={article.title || "Image"}
            />
          ) : null}

          <div className="flex flex-col ps-4 gap-2 h-full">
            <div className="flex gap-3">
              {article.catergories?.map((catergory) => (
                <ArticleTag key={catergory._id} title={catergory.title} />
              ))}
            </div>
            <div>
              <h1 className="text-lgBody text-creamyWhite font-bold">
                {article?.title}
              </h1>
              <ArticleTimeDate
                publishedAt={article?.publishedAt}
                timeToRead={article?.timeToRead}
              />
            </div>
            <div className="mt-auto text-highlight flex items-center py-2 text-tag gap-2">
              Read More <ArrowRightIcon className="h-3 w-3" />
            </div>
          </div>
        </Link>

      ))
      }

    </div >
  );
}
