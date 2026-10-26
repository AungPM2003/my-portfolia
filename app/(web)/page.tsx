
import ArticleCard from '@/app/_components/ArticleComponents/articleLinkCard'
import { sanityFetch } from "@/sanity/lib/live";
import { ARTICLES_QUERY } from '@/sanity/queries/query';
export default async function Page() {
  const {data:articles} = await sanityFetch({query:ARTICLES_QUERY})
  
  return (
  <div>
      <div className='border-b-[0.5px] border-b-body'>
          <h2 className='text-white font-bold text-hero/tight tracking-tighter py-4'>Hello,I'm <span className='text-highlight'>Aung Phone Myat</span></h2>
          <p className="text-body/relaxed tracking-tight py-4 pe-6 text-body">
            An Inspired Developer who love to create amazing things.In this Section,I will Share my blog journey.
          </p>
      </div>

      
        <ArticleCard articles={articles}>
          <h2 className="text-section/tight tracking-tight text-creamyWhite font-bold py-4">Data Structure And Algorithms</h2>
          <p className="text-body/relaxed tracking-tighter py-4">Here are explanations of Data Structures and Algorithms and their related LeetCode problems.</p>
        </ArticleCard>
  </div>);
}
