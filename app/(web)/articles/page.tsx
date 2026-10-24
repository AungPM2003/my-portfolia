
import { sanityFetch } from "@/sanity/lib/live"
import { CATERGORIES_QUERY } from "@/sanity/queries/query"
import ArticleCatergory from "@/app/_components/ArticleComponents/articleCatergory"
import { connection } from "next/server";
export default async function page() {
  await connection();
  const {data:catergories}= await sanityFetch({query:CATERGORIES_QUERY});
  
  return(
    <>
      <div className="order-2 lg:order-1 min-w-0">
        <h2 className="text-header text-highlight-alt">
          Articles
        </h2>
        <p className="text-paragraph py-2">Here are some of the latest articles that I've learned.</p>
      </div>

      <div className="order-1 lg:order-2">
        <ArticleCatergory catergories={catergories} />
      </div>

    </>
  )
}



