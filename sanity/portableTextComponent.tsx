import { PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { urlFor } from "./lib/image";
import HighLighter from "@/app/_components/SyntaxHighlighter";
import { toPlainText } from "@portabletext/toolkit";
import { slugify } from "@/app/lib/slugify";
// import { Refractor,registerLanguage } from "react-refractor";
// import typescript from "refractor/typescript";


export const components:PortableTextComponents = {
    types:{
        image: (props) => 
            props.value ? (
                <Image src={urlFor(props.value).width(600).height(400).quality(100).auto("format").url()} alt={props?.value?.alt || ""} width={600} height={400}/>
            ):null,
        codeContent:({value}) => (
           <HighLighter language={value.language} codeString={value.code}/>
        )
        
    },
    marks:{
        textColor:({children,value}) => <span style={{color:value.value}}> {children}</span>,
    },
    block:{
        normal:({children}) => <p className="text-[17px] tracking-wider text-creamyWhite py-3 hyphens-auto">{children}</p>,
        heading:({children,value}) => <h1 id={slugify(toPlainText(value))}className="text-[22px] text-creamyWhite py-4 font-bold scroll-mt-14"> {children}</h1>,
    },
    
}

