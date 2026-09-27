// import Title from '@/app/_components/title'
import ArticleCard from '@/app/_components/articleCards'
export default function Page() {
  return (<div className="py-6 px-2">
    {/* <Title text='Home'/> */}
    
      <h2 className='text-white text-3xl'>Hello, I am <span className='text-highlight-alt'>Aung Phone Myat</span></h2>
      <p className="text-lg py-4">
        An Inspired Developer who love to create amazing things.In this Section,I will Share my blog journey.
      </p>

      
        <ArticleCard/>
  </div>);
}
