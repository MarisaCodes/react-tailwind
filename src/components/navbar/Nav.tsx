import { ReactNode } from "react";

const Nav = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 flex flex-wrap items-center lg:justify-between">
      {children}
    </nav>
  );
};

export default Nav;
