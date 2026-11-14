"use client";

import { slugify } from "@/app/lib/slugify";
import { ARTICLE_QUERY_RESULT } from "@/sanity.types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
type indexProps = {
  article: ARTICLE_QUERY_RESULT;
};
export default function Index({ article }: indexProps) {
  const [isHidden, setIsHidden] = useState(true);
  function onClickHandler() {
    setIsHidden((isHidden) => !isHidden);
  }

  return (
    <div className="sticky top-0 hidden md:block">
      <h3
        className="text-tag text-highlight flex cursor-pointer items-center gap-3 px-2 py-1"
        onClick={onClickHandler}
      >
        On this page{" "}
        <span>
          {isHidden ? (
            <ChevronDownIcon className="h-4 w-4" />
          ) : (
            <ChevronUpIcon className="h-4 w-4" />
          )}
        </span>
      </h3>
      <div
        className={`flex flex-col border-l border-l-[#A7B6C8] ${isHidden ? "hidden" : "block"}`}
      >
        {article?.headings?.map((head) => (
          <a
            href={`#${slugify(head?.text || "")}`}
            key={head?._key}
            className="text-creamyWhite p-2 text-sm/tight font-bold"
          >
            {head?.text}
          </a>
        ))}
      </div>
    </div>
  );
}
