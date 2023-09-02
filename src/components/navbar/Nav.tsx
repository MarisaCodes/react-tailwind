import { ReactNode, useEffect, useRef } from "react";

const Nav = ({
  children,
  id = "main-menu",
}: {
  children: ReactNode;
  id?: string;
}) => {
  const mainMenu = useRef(null as HTMLInputElement | null);

  useEffect(() => {
    function handleDoc(e: Event) {
      if (!mainMenu.current?.parentElement?.contains(e.target as HTMLElement)) {
        const checkbox = mainMenu.current as HTMLInputElement;
        checkbox ? (checkbox.checked = false) : null;
      }
    }
    document.addEventListener("click", (e) => handleDoc(e));
  }, []);
  return (
    <nav className="w-full bg-white border-b border-b-gray-800 dark:border-b-gray-600 dark:bg-gray-800 flex flex-wrap items-center lg:justify-between z-50 px-2">
      <input
        type="checkbox"
        name={id}
        id={id}
        className="hidden peer"
        ref={mainMenu}
      />
      {children}
    </nav>
  );
};

export default Nav;
