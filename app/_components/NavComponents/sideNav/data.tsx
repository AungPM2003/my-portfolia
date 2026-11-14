import { ReactElement } from "react";
import { HomeIcon, UserIcon, PencilIcon } from "@heroicons/react/20/solid";
import { Github, LinkedIn } from "../linkIcons";
type Nav = {
  id: number;
  href: string;
  label: string;
  target: string;
  icon: ReactElement;
};

const navItems: Nav[] = [
  {
    id: 1,
    href: "/",
    label: "Home",
    target: "_self",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    id: 2,
    href: "/about",
    label: "About",
    target: "_self",
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    id: 3,
    href: "/articles",
    label: "Article",
    target: "_self",
    icon: <PencilIcon className="h-5 w-5" />,
  },
];
const linkItems: Nav[] = [
  {
    id: 1,
    href: "https://github.com/AungPM2003",
    label: "github",
    target: "_blank",
    icon: <Github className="h-5 w-5" />,
  },
  {
    id: 2,
    href: "https://linkedin.com/in/aung-phone-myat-1b5455293",
    label: "linkedIn",
    target: "_blank",
    icon: <LinkedIn className="h-5 w-5" />,
  },
];
export { navItems, linkItems };
