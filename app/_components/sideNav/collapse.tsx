import NavLink from "../NavLink";
import { navItems, linkItems } from "./data";

export default function SideNav() {
  return (
    <>
      <div className="flex flex-col gap-1.5 rounded-md">
        {navItems.map((item) => (
          <NavLink key={item.id} icon={item.icon} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </div>

      <hr className="border-deep-4 my-1 h-px cursor-pointer" />
      <div className="flex flex-col gap-1.5 rounded-md pt-2">
        {linkItems.map((item) => (
          <NavLink key={item.id} icon={item.icon} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
