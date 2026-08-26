import { Image, PortableTextBlock } from "sanity";


interface Author{
    _id?:string;
    authorImage:Image;
    bio?:PortableTextBlock[];
    name?:string;
}

export type {Author}