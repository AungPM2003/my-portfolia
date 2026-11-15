import { FolderMinusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function index({ filter }: { filter: string }) {
  return (
    <div className="py-4">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-dotted p-6 md:gap-2">
        <div className="border-deep-2 bg-deep-2/40 rounded-full border p-4">
          <FolderMinusIcon className="text-highlight h-10 w-10" />
        </div>
        <h2 className="md:text-section/tight text-card text-creamyWhite font-bold md:p-2">
          Nothing here yet
        </h2>
        <p className="text-body/relaxed p-2 text-center tracking-wider md:p-4">
          I haven’t written about &quot;{filter}&quot; yet, but it’s on my
          learning list. Check back soon, or pick another topic to explore in
          the meantime.
        </p>
        <Link
          href={"/articles"}
          className="bg-highlight rounded-full p-2 px-4 text-center text-black"
        >
          Browse all articles
        </Link>
      </div>
    </div>
  );
}
