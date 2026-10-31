import { FolderMinusIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

export default function index({filter}:{filter:string}) {
  return (
    <div className=" py-4">
        <div className="flex flex-col items-center border border-dotted rounded-2xl p-6 gap-4 md:gap-2">
            <div className="rounded-full border border-deep-2 bg-deep-2/40 p-4">
                <FolderMinusIcon className="w-10 h-10 text-highlight"/>
            </div>
            <h2 className="md:p-2 font-bold md:text-section/tight text-card text-creamyWhite ">Nothing here yet</h2>
            <p className="md:p-4 p-2  text-body/relaxed tracking-wider text-center">I haven’t written about &quot;{filter}&quot; yet, but it’s on my learning list. Check back soon, or pick another topic to explore in the meantime.</p>
            <Link href={"/articles"} className="bg-highlight p-2 px-4 text-black rounded-full text-center">
                Browse all articles
            </Link>
        </div>
    </div>
  )
}
