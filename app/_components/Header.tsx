"use client";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";
import { JSX } from "react/jsx-runtime";
import NavModal from "@/app/_components/NavModal";

export default function Header(): JSX.Element {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(() => !toggle);
  }

  return (
    <>
      <div className="bg-deep-2/20 absolute top-0 z-50 flex h-16 w-full items-center justify-between border-b border-deep-4 backdrop-blur-lg px-4 text-xl sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <Link
          href="/"
          className="focus-visible:ring-primary-950 focus-visible:ring-offset-deep-2 rounded-lg font-bold transition-colors outline-none hover:text-deep-4 focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          Aung P Myat
        </Link>
        <button
          type="button"
          onClick={handleToggle}
          className="border-deep-3 focus-visible:ring-deep-3 focus-visible:outline-deep-3 flex cursor-pointer rounded-lg border p-1.5 outline-none focus-visible:ring-2 lg:hidden"
        >
          <Bars3Icon className="size-6 text-black" />
        </button>
      </div>

      <NavModal toggle={toggle} handleToggle={handleToggle} />
    </>
  );
}
