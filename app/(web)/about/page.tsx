import { urlFor } from "@/sanity/lib/image"
import { sanityFetch } from "@/sanity/lib/live"
import { AUTHOR_QUERY } from "@/sanity/queries/query"
import { ArrowRightIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import { mainTech, secondaryTech } from "./aboutData"
import Link from "next/link"

export default async function page() {
  const {data:author}= await sanityFetch({query:AUTHOR_QUERY})
  return (
    <div>
      <div className="p-4 grid lg:grid-cols-[200_minmax(0,1fr)] gap-10 mb-4">
        <div className="py-2 mx-auto">
          {
            author?.authorImage ? 
            <Image src={urlFor(author.authorImage).url()} className="object-cover rounded-full w-50 h-50 " width={150} height={150} alt={`${author.authorImage.alternativeText}`}/>:
            null
          }
        </div>
        <div>
          <div className="text-hero/snug tracking-tight font-bold text-highlight p-2">{author?.name}</div>
          <div className="p-2">
            <p className="text-lgBody/relaxed tracking-tight text-creamyWhite">
              Software engineer who turns real-world problems into practical solutions through code, and thinks beyond single features to the bigger picture of a system.
            </p>
          </div>
          <div className="p-2 text-body text-greenish mb-4">
            <p>// I started coding since the era of googling is part of a job!</p>
          </div>
          <div className="">
            <button className="p-2">
              <Link href={"/articles"} className="flex items-center bg-highlight p-2 px-4 text-black rounded-full text-center" >
                  Read articles <span><ArrowRightIcon className="w-3 h-3"/></span>
              </Link>
            </button>
            <button className="p-2">
                <Link href={"https://github.com/AungPM2003"} target="_blank" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-greenish px-4 py-2 text-greenish transition-colors duration-300 hover:text-black" >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left scale-x-0 bg-greenish transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
                <span className="relative">GitHub</span>
                </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="border border-deep-2 bg-deep-2/40 rounded-lg px-2 py-4 mb-4">
          <div className="text-highlight text-lgBody font-bold px-4 py-2">How I learn</div>
          <p className="px-4 text-text-dark text-body/relaxed tracking-tight">I break down what I learn from YouTube tutorials, books, and my own experiments in a simple, enjoyable way so others can learn alongside me.</p>
      </div>
      <div >
        <h1 className="px-4 py-2 text-highlight border-b border-b-bBottom">Tech Stack</h1>
        <div className="flex flex-col sm:flex-row md:space-x-20 px-4 py-2 border-b border-b-bBottom">
          <h2 className="text-tag font-bold py-2 sm:w-[10%] ">Main tool</h2>
          <div className="flex items-center flex-wrap gap-x-2 text-body text-creamyWhite">
            {
              mainTech.map((tech) => (
                <div key={tech.id}>
                {tech.tech}
                {tech.id < mainTech.length && <span>.</span>}
                </div>
                
              ))
            }
          </div>
        </div>
        <div className="flex flex-col sm:flex-row md:space-x-20 px-4 py-2 border-b border-b-bBottom">
          <h2 className="text-tag font-bold py-2 sm:w-[10%]">Also use</h2>
          <div className="flex flex-wrap items-center gap-x-2  text-body text-creamyWhite">
            {
              secondaryTech.map((tech) => (
                <div key={tech.id}>
                {tech.tech}
                {tech.id < secondaryTech.length && <span>.</span>}
                </div>
                
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
