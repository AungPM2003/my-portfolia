import { PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { urlFor } from "./lib/image";

export const components:PortableTextComponents = {
    types:{
        image: (props) => 
            props.value ? (
                <Image src={urlFor(props.value).width(600).height(400).quality(100).auto("format").url()} alt={props?.value?.alt || ""} width={600} height={400}/>
            ):null
    }
}