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
                <Image src={urlFor(props.value).width(600).height(400).fit("crop").quality(100).auto("format").url()} alt={props?.value?.alt || ""} width={600} height={400}/>
            ):null,
        codeContent:({value}) => (
           <HighLighter language={value.language} filename={value.filename} codeString={value.code}/>
        )
        
    },
    marks:{
        textColor:({children,value}) => <span style={{color:value.value}}> {children}</span>,
    },
    block:{
        normal:({children}) => <p className="text-[17px] leading-[1.7] font-sans tracking-wider text-bodyText py-2 text-pretty">{children}</p>,
        heading:({children,value}) => <h2 id={slugify(toPlainText(value))} className="text-[22px]/6 text-headings py-4 font-mono font-semibold scroll-mt-14"> {children}</h2>,
        cmd:(({children}) => <div className="border border-deep-2 bg-deep-2/40 rounded-lg px-4 py-2 text-wrap">
            <p className="text-sm">{children}</p>
        </div>)
    },
    
}

