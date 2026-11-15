"use client";
import textSplitter from "@/app/lib/textSplitter";
import { ArrowsPointingOutIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
type Props = {
  language: string;
  codeString: string;
  filename: string;
};
export default function HighLighter({ language, codeString, filename }: Props) {
  const [isExpanded, setIsExpanded] = useState(true);
  function handleOnClick() {
    setIsExpanded(() => !isExpanded);
  }
  return (
    <figure className="border-deep-2 rounded-xl border">
      <figcaption className="rounded-t-xl3 bg-deep-2/40 text-tag text-headings flex items-center justify-between gap-3 py-2 pr-2 pl-4 font-mono">
        <span className="flex items-center gap-2.5">{filename}</span>
        <span className="rounded-md bg-[#1d3148] p-2 text-xs">{language}</span>
      </figcaption>
      <SyntaxHighlighter
        language={language}
        style={nightOwl}
        customStyle={{
          margin: 0,
          padding: "1.25rem",
          fontSize: "14px",
          lineHeight: 1.65,
        }}
      >
        {isExpanded
          ? textSplitter({
              text: codeString.trimEnd(),
              startpoint: 0,
              endpoint: 20,
              replaceItem: "...",
            })
          : codeString.trimEnd()}
      </SyntaxHighlighter>
      <div
        className="bg-deep-2/40 flex w-full cursor-pointer justify-center rounded-b-xl py-2"
        onClick={handleOnClick}
      >
        <ArrowsPointingOutIcon className="h-5 w-5" />
      </div>
    </figure>
  );
}
