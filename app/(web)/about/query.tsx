import { defineQuery } from "next-sanity";

export const AUTHOR_QUERY = defineQuery(
  `*[_type=="author" && defined(authorImage)][0]{
    _id,authorImage,bio,name
  }`
)