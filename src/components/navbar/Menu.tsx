import { ReactNode, useEffect, useRef } from "react";

const Menu = ({ children }: { children: ReactNode }) => {
  const menu = useRef(null as HTMLInputElement | null);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!menu.current?.contains(e.target as HTMLElement)) {
        const checkbox = menu.current?.querySelector(
          'input[type="checkbox"]'
        ) as HTMLInputElement;
        checkbox.checked = false;
        return;
      }
    });
  }, []);
  return (
    <div
      className="w-full dark:bg-gray-800 border-t border-t-gray-700"
      ref={menu}
    >
      {/* shows up in tablet */}
      <label
        htmlFor="more"
        className="h-full items-center hidden lg:hidden md:flex cursor-pointer"
      >
        More &#x25BC;
      </label>
      <input type="checkbox" name="more" id="more" className="hidden peer" />
      <div className="w-full flex flex-col gap-3 text-center">{children}</div>
      <hr className="h-px dark:border-gray-700 w-11/12 block mx-auto mt-4" />
    </div>
  );
};

export default Menu;
