import ArticleCard from '@/app/_components/ArticleComponents/articleLinkCard'
import { sanityFetch } from "@/sanity/lib/live";
import { ARTICLES_QUERY } from '@/sanity/queries/query';
export default async function Page() {
  const {data:articles} = await sanityFetch({query:ARTICLES_QUERY})
 
  return (
  <div>
      <div className='border-b-[0.5px] border-b-body'>
          <h2 className='text-white font-bold text-hero/tight tracking-wide py-4'>Hello,I&apos;m <span className='text-highlight'>Aung Phone Myat</span></h2>
          <p className="text-body/relaxed tracking-tight py-4 pe-6 text-body">
            An Inspired Developer who love to create amazing things.In this Section,I will Share my blog journey.
          </p>
      </div>

      
        <ArticleCard articles={articles} category="DSA">
          <h2 className="text-section/tight tracking-tight text-creamyWhite font-bold py-2">Basic Data Structure</h2>
          <p className="text-body/relaxed tracking-tighter">Here are explanations of Basic Data Structures.</p>
        </ArticleCard>
        <ArticleCard articles={articles} category="Docker">
          <h2 className="text-section/tight tracking-tight text-creamyWhite font-bold">Docker Time</h2>
          <p className="text-body/relaxed tracking-tighter py-2">Here are some of the Docker facts that I have learned.</p>
        </ArticleCard>
  </div>);
}
