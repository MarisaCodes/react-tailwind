import { ReactNode, useEffect, useRef } from "react";

const Menu = ({
  children,
  id = "more",
}: {
  children?: ReactNode;
  id?: string;
}) => {
  const menu = useRef(null as HTMLInputElement | null);
  useEffect(() => {
    function handleDoc(e: Event) {
      if (!menu.current?.contains(e.target as HTMLElement)) {
        const checkbox = menu.current?.querySelector(
          "input[type='checkbox']"
        ) as HTMLInputElement;
        checkbox ? (checkbox.checked = false) : null;
      }

    }
    document.addEventListener("click", (e) => handleDoc(e));
    return () => {
      document.removeEventListener("click", (e) => handleDoc(e));
    };
  }, []);
  return (
    <div
      className="w-full md:w-fit dark:bg-gray-800 hidden md:block peer-checked:block border-t border-t-gray-800 dark:border-t-gray-600"
      ref={menu}
    >
      {/* shows up in tablet */}
      {children && (
        <>
          <label
            htmlFor={id}
            className="h-full items-center hidden lg:hidden md:flex cursor-pointer pl-2"
          >
            More &#x25BC;
          </label>
          <input
            type="checkbox"
            name={id}
            id={id}
            className="hidden peer"
          />
          <div className="w-full flex flex-col gap-3 text-center py-3 md:py-0 md:hidden lg:flex lg:flex-row lg:gap-7 peer-checked:flex peer-checked:absolute peer-checked:text-left peer-checked:w-fit peer-checked:bg-white peer-checked:dark:bg-gray-800 peer-checked:p-4 peer-checked:px-10 peer-checked:rounded-md peer-checked:z-20 peer-checked:border-2 peer-checked:border-gray-400 peer-checked:dark:border-gray-700">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
