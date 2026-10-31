import { sanityFetch } from "@/sanity/lib/live"
import { CATERGORIES_QUERY } from "@/sanity/queries/query"
import { connection } from "next/server";
import ArticleCatergory from "@/app/_components/ArticleComponents/articleCatergory"
import ArticleCard from '@/app/_components/ArticleComponents/articleCard';
type PageProps = {
  searchParams:Promise<{[key:string]:string}>
}
export default async function page({searchParams}:PageProps) {
  await connection();
  const {data:catergories}= await sanityFetch({query:CATERGORIES_QUERY});
  const params = await searchParams;
  const filter =  params?.catergory ?? "All";
  return(
    <>
      <div className="order-2 lg:order-1 p-2 w-full">
        <div className=" border-b border-b-grey-50">
          <h2 className="text-hero/tight font-bold tracking-wide text-highlight py-2">
            Articles
          </h2>
          <p className="text-body/tight tracking-wide py-4 pb-6">Here are some of the latest articles that I've learned.</p>
        </div>
        <ArticleCard filter={filter}/>
      </div>

      <div className="order-1 lg:order-2 border border-deep-2 bg-deep-2/40 p-4 rounded-2xl flex flex-col md:gap-4 gap-2 h-fit w-fit shrink-0">
        <h1 className="text-highlight text-body md:py-2 flex-none">Catergories</h1>
        <ArticleCatergory catergories={catergories} />
      </div>

    </>
  )
}



