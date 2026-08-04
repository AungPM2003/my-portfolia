import {  ReactElement } from "react";
import { HomeIcon,UserIcon,PencilIcon } from "@heroicons/react/20/solid";
import NavLink from "./NavLink";
import { Github, LinkedIn } from "./linkIcons";

type Nav = {
    id:number;
    href:string;
    label:string;
    icon:ReactElement;
}

const navItems:Nav[] = [
    {
        id:1,
        href:"/",
        label:"Home",
        icon:<HomeIcon className="w-5 h-5"/>
    },
    {
        id:2,
        href:"/about",
        label:"About",
        icon:<UserIcon className="w-5 h-5"/>
    },
    {
        id:3,
        href:"/articles",
        label:"Article",
        icon:<PencilIcon className="w-5 h-5"/>
    },
] 
const linkItems:Nav[] = [
    {
        id:1,
        href:"",
        label:"github",
        icon:<Github className="w-5 h-5"/>
    },
    {
        id:2,
        href:"",
        label:"linkedIn",
        icon:<LinkedIn className="w-5 h-5"/>
    }
]
export default function SideNav(){
    return(
        <nav className="hidden lg:block p-3 border border-red-400 rounded-md">
            <div className="flex flex-col  gap-1.5 rounded-md">
                {navItems.map(item => (
                    <NavLink key={item.id} icon={item.icon} href={item.href}>
                        {item.label}
                    </NavLink>
                ))}
            </div>

            <hr className="h-px border-accent-500 cursor-pointer "/>
            <div className="flex flex-col gap-1.5 rounded-md pt-2">
                {linkItems.map(item=>(
                    <NavLink key={item.id} icon={item.icon} href={item.href}>
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}