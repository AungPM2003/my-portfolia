import { sanityFetch } from "@/sanity/lib/live";
import {AUTHOR_QUERY } from "./query";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Title from '@/app/_components/title';
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponent";
import techIcons from "./techIcons";


export default async function page() {
  const {data:author} = await sanityFetch({query:AUTHOR_QUERY})
  return (
    <div>
      <Title text="About"/>
      <div className="px-4">
        <h1 className="text-5xl text-highlight py-5">{author?.name}</h1>  
      
        <div className="float-left p-4">
          {
            author?.authorImage ? 
            <Image src={urlFor(author.authorImage).url()} className="object-cover rounded-s-xl " width={150} height={100} alt={`${author.authorImage.alternativeText}`}/>:
            null
          }
        </div>
        <div className=" text-paragraph/10">
          {
            author?.bio ? (
              <PortableText value={author.bio} components={components}/>

            ):null
            
          }
        </div>
        <div className="w-fit rounded-md flex gap-2 border border-deep-2 bg-deep-2/40 backdrop-blur-md shadow-lg p-3 my-4">
          <div className="text-highlight-alt text-xl whitespace-nowrap">
              Tech Stack : 
          </div>
          <div className="flex max-w-75 gap-2 flex-wrap ">
            {
            techIcons.map((icon) => (
              <span key={icon.id}>{icon.name}</span>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
