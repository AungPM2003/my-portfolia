import { sanityFetch } from "@/sanity/lib/live";
import { ARTICLE_QUERY } from "@/sanity/queries/query";
import MainArticle from "@/app/_components/ArticleComponents/mainArticle";
import ArticleOnPage from "@/app/_components/ArticleComponents/articleOnPage";
interface PageProps {
  params: Promise<{ slug: "title" }>;
}
export default async function page({ params }: PageProps) {
  //quering for the individual articles
  const { data: article } = await sanityFetch({
    query: ARTICLE_QUERY,
    params: params,
  });


  return (
    <>
      <div className="py-2">
        <MainArticle article={article} />
      </div>
      <div className="lg:block hidden">
        <ArticleOnPage article={article} />
      </div>
    </>
  );
}
