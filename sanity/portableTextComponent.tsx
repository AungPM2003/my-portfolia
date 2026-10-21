import { PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { urlFor } from "./lib/image";
import HighLighter from "@/app/_components/SyntaxHighlighter";
// import { Refractor,registerLanguage } from "react-refractor";
// import typescript from "refractor/typescript";


export const components:PortableTextComponents = {
    types:{
        image: (props) => 
            props.value ? (
                <Image src={urlFor(props.value).width(600).height(400).quality(100).auto("format").url()} alt={props?.value?.alt || ""} width={600} height={400}/>
            ):null,
        // codeContent:({value}:any) =>{
        //     return <Refractor language={value.language} value={value.code}/>
        // }
        codeContent:({value}) => (
           <HighLighter language={value.language} codeString={value.code}/>
        )
        
    },
    marks:{
        textColor:({children,value}) => <span style={{color:value.value}}> {children}</span>,
    },
    block:{
        lg:({children}) => <p>{children}</p>,
        heading:({children}) => <h1 className="text-3xl my-2"> {children}</h1>,
        
    },
    
}

