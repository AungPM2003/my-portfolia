import ArticleCard from '@/app/_components/ArticleComponents/articleLinkCard'
import { getArticles } from '../lib/query';



export default async function Page() {
  const articles = await getArticles();
  return (
    <div >
      <div className='border-b-[0.5px] border-b-body flex flex-col gap-4 py-4'>
        <h2 className='text-white font-bold text-hero/tight tracking-wide'>Hello,I&apos;m <span className='text-highlight'>Aung Phone Myat</span></h2>
        <p className="text-body/relaxed tracking-tight text-body">
          An Inspired Developer who love to create amazing things.In this Section,I will Share my blog journey.
        </p>
      </div>


      <ArticleCard articles={articles} category="DSA">
        <h2 className="text-section/tight tracking-tight text-creamyWhite font-bold">Basic Data Structure</h2>
        <p className="text-body/relaxed tracking-tighter">Here are explanations of Basic Data Structures.</p>
      </ArticleCard>


      <ArticleCard articles={articles} category="Docker">
        <h2 className="text-section/tight tracking-tight text-creamyWhite font-bold">Docker Time</h2>
        <p className="text-body/relaxed tracking-tighter">Here are some of the Docker facts that I have learned.</p>
      </ArticleCard>

    </div>);
}
