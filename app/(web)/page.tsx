
import ArticleCard from '@/app/_components/ArticleComponents/articleCards'
import { sanityFetch } from "@/sanity/lib/live";
import { TITLE_QUERY } from '@/sanity/queries/query';
export default async function Page() {
  const {data:cardTitles} = await sanityFetch({query:TITLE_QUERY,params:{catergory:"DSA"}})
  return (<div className="py-6 px-2">
      <h2 className='text-white text-3xl'>Hello, I am <span className='text-highlight-alt'>Aung Phone Myat</span></h2>
      <p className="text-lg py-4">
        An Inspired Developer who love to create amazing things.In this Section,I will Share my blog journey.
      </p>

      
        <ArticleCard cardTitles={cardTitles}>
          <h2 className="text-highlight-alt text-2xl">Data Structure And Algorithms</h2>
          <p>Here are explanations of Data Structures and Algorithms and their related LeetCode problems.</p>
        </ArticleCard>
  </div>);
}
