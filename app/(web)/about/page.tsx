import { sanityFetch } from "@/sanity/lib/live";
import {AUTHOR_QUERY } from "./query";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function page() {
  const {data:author} = await sanityFetch({query:AUTHOR_QUERY})
  return (
    <div>
      <h1 className="font-bold">About</h1>
      <h1>{author?.name}</h1>
      <p>{author?.bio}</p>
      {
        author?.authorImage ? 
        <Image src={urlFor(author.authorImage).url()} width={300} height={300} alt={`${author.authorImage.alternativeText}`}/>:
        null
      }
    </div>
  );
}
