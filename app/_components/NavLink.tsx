"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface Props {
  children: string;
  icon: ReactNode;
  href: string;
  target?: string;
}
export default function NavIconLink({ children, icon, href, target }: Props) {
  const selected = useSelectedLayoutSegment();
  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        "hover:bg-deep-3 flex place-items-center items-center gap-4 rounded-md p-4 font-bold transition-[color,background-color,border-color] duration-300",
        {
          "bg-deep-3":
            `/${selected}` === href || (selected === null && href === "/"),
        },
      )}
    >
      <span>{icon}</span>
      {children}
    </Link>
  );
}
