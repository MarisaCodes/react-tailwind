import { ReactNode } from "react";

const Navactions = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full md:flex flex-col gap-3 items-center justify-center dark:bg-gray-800 py-4 hidden peer-checked:flex md:w-fit md:flex-row md:flex-grow md:justify-end md:pr-2 lg:flex-grow-0">
      {children}
    </div>
  );
};

export default Navactions;
