import { ReactElement } from "react";
import { HomeIcon, UserIcon, PencilIcon } from "@heroicons/react/20/solid";
import { Github, LinkedIn } from "../linkIcons";
type Nav = {
  id: number;
  href: string;
  label: string;
  icon: ReactElement;
};

const navItems: Nav[] = [
  {
    id: 1,
    href: "/",
    label: "Home",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    id: 2,
    href: "/about",
    label: "About",
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    id: 3,
    href: "/articles",
    label: "Article",
    icon: <PencilIcon className="h-5 w-5" />,
  },
];
const linkItems: Nav[] = [
  {
    id: 1,
    href: "",
    label: "github",
    icon: <Github className="h-5 w-5" />,
  },
  {
    id: 2,
    href: "",
    label: "linkedIn",
    icon: <LinkedIn className="h-5 w-5" />,
  },
];
export { navItems, linkItems };
