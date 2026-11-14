import { sanityFetch } from "@/sanity/lib/live";
import { CATERGORIES_QUERY } from "@/sanity/queries/query";
import { connection } from "next/server";
import ArticleCatergory from "@/app/_components/ArticleComponents/articleCatergory";
import ArticleCard from "@/app/_components/ArticleComponents/articleCard";
import { ArticleHeader } from "@/app/_components/ArticleComponents/ArticleHeader/ArticleHeader";
type PageProps = {
  searchParams: Promise<{ [key: string]: string }>;
};
export default async function page({ searchParams }: PageProps) {
  await connection();
  const params = await searchParams;
  const filter = params?.catergory ?? "All";
  const { data: catergories } = await sanityFetch({ query: CATERGORIES_QUERY });

  return (
    <>
      <ArticleHeader small={true} />
      <div className="w-full order-2 lg:order-1">
        <ArticleHeader small={false} />
        <ArticleCard filter={filter} />
      </div>

      <div className="border-deep-2 bg-deep-2/40 order-1 lg:order-2 h-fit w-fit shrink-0 gap-2 rounded-2xl border p-4 md:gap-4 flex flex-col">
        <h1 className="text-highlight text-body">
          Catergories
        </h1>
        <ArticleCatergory catergories={catergories} />
      </div>
    </>
  );
}
