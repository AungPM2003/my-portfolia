import Link from "next/link"

const test = [
    {id:1,name:"card1"},
    {id:2,name:"card2"},
    {id:3,name:"card3"},
    {id:4,name:"card4"},
    {id:5,name:"card5"},
    {id:6,name:"card5"},
]
export default function Index({children,cardTitles}){
    
    return (
        <div>
        {children}
        <div className="py-5 flex gap-4 max-w-187.5 overflow-x-scroll scrollbar-thin scrollbar-thumb-deep-3 scrollbar-track-deep-2 ">
            {
                cardTitles.map((cardTitle) => (
                    <Link href={`articles/${cardTitle.slug.current}`} key={cardTitle._id} className="p-4 w-50 h-60 shrink-0 border border-amber-300 hover:-ml-17.5 hover:rotate-6 hover:-translate-y-2 first:hover:translate-y-0 first:hover:ml-25 hover:-translate-20 hover:mr-11 first:ml-0 -ml-25 origin-center transition-all will-change-transform duration-200 rounded-lg flex flex-col pt-10 gap-8">
                        <h1 className="text-3xl">{cardTitle.title}</h1>
                        <div className="flex gap-3">
                            {cardTitle.catergories.map((catergory) =>(
                                <span className="bg-highlight-alt px-3 py-1 rounded-xl" key={catergory.title}>{catergory.title}</span>
                            ))}
                        </div>
                    </Link>
                ))
            }
        </div>
        </div>     
    )
}