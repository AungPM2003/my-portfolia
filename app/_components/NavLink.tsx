"use client"
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";
import {clsx} from "clsx"

interface Props{
    children:string;
    icon:ReactNode;
    href:string;
    target?:string;
}
export default function NavIconLink({children,icon,href,target}:Props){ 
    const selected = useSelectedLayoutSegment()
    return(
        <Link href={href} target={target} className={clsx("flex items-center  p-4 gap-4 rounded-md place-items-center font-bold transition-[color,background-color,border-color] duration-300 hover:bg-accent-400",
            {
                "bg-accent-800":`/${selected}` === href || (selected === null && href ==="/"),
            }
        )}>
            <span>
                {icon}
            </span>
            {children}
        </Link> 
       )
}