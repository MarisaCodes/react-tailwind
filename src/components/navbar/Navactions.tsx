import { ReactNode } from "react";

const Navactions = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center dark:bg-gray-800 py-4">
      {children}
    </div>
  );
};

export default Navactions;


























