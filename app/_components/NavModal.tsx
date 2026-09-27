import { useCallback, useEffect } from "react";
import SideNav from "@/app/_components/sideNav/collapse";

type Props = {
  toggle: boolean;
  handleToggle: () => void;
};
export default function NavModal({ toggle, handleToggle }: Props) {
  const onEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") return handleToggle();
    },
    [handleToggle],
  );

  useEffect(() => {
    if (!toggle) return;
    document.addEventListener("keydown", onEscape);
    //to prevent scrolling while modal is on
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [toggle, onEscape]);

  if (!toggle) return null;

  return (
    <div
      role="dialog"
      className="fixed inset-0 z-50 grid h-dvh place-items-center py-6 bg-deep-2/70"
      onClick={handleToggle}
    >
      <div
        className=" border border-deep-2 bg-deep-2/40 backdrop-blur-md  w-[90%] max-w-sm rounded-2xl p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <SideNav />
      </div>
    </div>
  );
}
