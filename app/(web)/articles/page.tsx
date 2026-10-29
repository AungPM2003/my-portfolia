import { sanityFetch } from "@/sanity/lib/live"
import { CATERGORIES_QUERY } from "@/sanity/queries/query"
import { connection } from "next/server";
import ArticleCatergory from "@/app/_components/ArticleComponents/articleCatergory"
import ArticleCard from '@/app/_components/ArticleComponents/articleCard';
export default async function page() {
  await connection();
  const {data:catergories}= await sanityFetch({query:CATERGORIES_QUERY});
  
  return(
    <>
      <div className="order-2 lg:order-1 min-w-0 p-2">
        <div className=" border-b border-b-grey-50">
          <h2 className="text-hero/tight font-bold tracking-wide text-highlight py-2">
            Articles
          </h2>
          <p className="text-body/tight tracking-wide py-4 pb-6">Here are some of the latest articles that I've learned.</p>
        </div>
        <ArticleCard/>
      </div>

      <div className="order-1 lg:order-2">
        <ArticleCatergory catergories={catergories} />
      </div>

    </>
  )
}



