import CatergoryBtn from "@/app/_components/catergoryBtn";
import { sanityFetch } from "@/sanity/lib/live"
import { CATERGORIES_QUERY } from "@/sanity/queries/query"
import { Catergory } from "@/sanity/types";

export default async function page() {
  const {data:catergories}:{data:Catergory[]}= await sanityFetch({query:CATERGORIES_QUERY});
  
  return(
    <>
    <div>
      article
    </div>
    <div className="">
      <div className="flex flex-wrap gap-2 content-start justify-center p-2  border border-deep-3 rounded-md">
        {catergories.map((catergory) =>(
         <CatergoryBtn key={catergory._id} catergory={catergory}/>
        ))}
      </div>
    </div>
    </>
  )
}



