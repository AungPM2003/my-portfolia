import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {  duotoneSea } from 'react-syntax-highlighter/dist/esm/styles/prism';


type Props = {
    language:string | "typescript";
    codeString:string;
}
export default function HighLighter({language = "typescript",codeString}:Props){
    
    return(
         <SyntaxHighlighter language={language} style={duotoneSea}>
            {codeString}
        </SyntaxHighlighter>
    )
}