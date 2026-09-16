import { sanityFetch } from "@/sanity/lib/live";
import {AUTHOR_QUERY } from "./query";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Title from '@/app/_components/title';
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponent";

export default async function page() {
  const {data:author} = await sanityFetch({query:AUTHOR_QUERY})
  return (
    <div>
      <Title text="About"/>
      <div>
        <h1 className="text-4xl text-highlight">{author?.name}</h1>  
      
        <div className="float-left p-4">
          {
            author?.authorImage ? 
            <Image src={urlFor(author.authorImage).url()} className="object-cover rounded-s-xl " width={150} height={100} alt={`${author.authorImage.alternativeText}`}/>:
            null
          }
        </div>
        <div className="p-4">
          {
            author?.bio ? (
              <PortableText value={author.bio} components={components}/>

            ):null
            
          }
        </div>

        </div>
    </div>
  );
}
