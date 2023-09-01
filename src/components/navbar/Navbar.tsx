import { ReactNode } from "react";

const Navbar = ({children}:{children:ReactNode}) => {
  return (
    <nav className="w-full dark:bg-gray-800 flex flex-wrap items-center">
        {children}
    </nav>
  );
};

export default Navbar;



