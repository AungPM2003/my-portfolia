import { defineQuery } from "next-sanity";


//querying for the author myself
export const AUTHOR_QUERY = defineQuery(
  `*[_type=="author" && defined(authorImage)][0]{
    _id,authorImage,bio,name
  }`
)

//querying for the catergories related for the article
export const CATERGORIES_QUERY = defineQuery(
    `*[_type=="catergory"]{
        _id,title,slug,description
    }`
)