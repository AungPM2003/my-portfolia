"use client";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";
import { JSX } from "react/jsx-runtime";
import NavModal from "@/app/_components/NavComponents/NavModal";

export default function Header(): JSX.Element {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(() => !toggle);
  }

  return (
    <>
      <div className="bg-deep-2/20 border-deep-4 text-card sticky top-0 flex w-full items-center justify-between border-b px-6 backdrop-blur-lg">
        <Link
          href="/"
          className="focus-visible:ring-primary-950 focus-visible:ring-offset-deep-2 hover:text-deep-4 rounded-lg font-bold text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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
