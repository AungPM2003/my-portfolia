"use client"
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";
import { JSX } from "react/jsx-runtime";
import NavModal from "@/app/_components/NavModal";

export default function Header(): JSX.Element {
  const [toggle,setToggle] = useState(false)
  function handleToggle(){
    setToggle(() => !toggle)
  }

  return (
    <>
    <div className="bg-primary-600 absolute top-0 z-50 flex h-16 w-full items-center justify-between border-b border-slate-200 px-4 text-xl sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <Link
        href="/"
        className="focus-visible:ring-primary-950 focus-visible:ring-offset-primary-950 rounded-lg font-bold text-white transition-colors outline-none hover:text-black focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        Aung P Myat
      </Link>
      <button
        type="button"
        onClick={handleToggle}
        className="border-accent-400 focus-visible:ring-accent-400 focus-visible:outline-accent-400 flex cursor-pointer rounded-lg border p-1.5 outline-none focus-visible:ring-2 lg:hidden"
      >
        <Bars3Icon className="size-6 text-black" />
      </button>
    </div>

    
      <NavModal toggle={toggle} handleToggle={handleToggle} />
    </>
  );
}
