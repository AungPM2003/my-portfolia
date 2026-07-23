import Link from "next/link";
import { JSX } from "react/jsx-runtime";

export default function Header():JSX.Element {
  return (
    <div className="absolute bg-primary-600 w-full top-0 z-50 h-16 flex justify-between items-center px-4 xl:px-12 text-xl border-b border-slate-200">
        <Link href="/" className="font-bold text-white outline-none transition-colors hover:text-black focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg focus-visible:ring-primary-950 focus-visible:ring-offset-primary-950">Aung P Myat</Link>
    </div>
  )
}
