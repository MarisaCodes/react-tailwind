import { ReactNode } from "react";

const BlockNavItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-full hover:bg-gray-200 dark:hover:bg-gray-700 px-3 dark:text-white dark:hover:text-gray-400 lg:w-fit rounded-lg lg:rounded-none md:px-3 md:py-1 lg:px-6 lg:py-2 w-full">
      {children}
    </div>
  );
};

export default BlockNavItem;
