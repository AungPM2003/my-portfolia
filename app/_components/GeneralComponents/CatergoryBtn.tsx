"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function CatergoryBtn({ title, articleCount }: { title: string | null, articleCount: number }) {
  const searchParam = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const current_param = searchParam.get("catergory") ?? "All";

  function handleOnClick(filter: string | null) {
    if (!filter) return;
    const params = new URLSearchParams(searchParam);
    params.set("catergory", filter);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <button
      className={["hover:bg-deep-4 text-text-dark inline-flex gap-2 justify-center items-center rounded-full border  px-3 py-1 text-sm transition duration-300 hover:-translate-y-px hover:cursor-pointer hover:border-[#4a6280] hover:bg-white/[0.07] hover:text-white focus-visible:ring-2 focus-visible:ring-[#ff7a85]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#132336] focus-visible:outline-none active:translate-y-0",
        current_param === title ? "border-highlight/60 bg-[#ff7a85]/15 text-highlight shadow-[0_0_20px_-6px] shadow-highlight " : "border-white/10 bg-white/3",
      ].join(" ")}
      onClick={() => handleOnClick(title)}
    >
      {title}
      <span className={`rounded-full  flex px-1.5 justify-center items-center ${current_param == title ? "bg-highlight/60" : "bg-deep-4/30"}`}>{articleCount}</span>
    </button >
  );
}

