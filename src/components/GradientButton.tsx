import { MouseEventHandler, ReactNode } from "react";
const GradientButton = ({
  children,
  from,
  to,
  handleClick,
  customClasses,
}: {
  children?: ReactNode;
  from: string;
  to: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  customClasses?: string;
}) => {
  return (
    <div
      className={`bg-gradient-to-br z-10 border-transparent ${from} p-0.5 ${to} rounded-lg flex items-center justify-center dark:text-white`}
    >
      <button
        onClick={handleClick}
        className={`bg-white h-min py-2 px-4 ${customClasses} dark:bg-gray-900 hover:bg-gradient-to-br ${from} ${to} rounded-md hover:text-white`}
      >
        {children}
      </button>
    </div>
  );
};

export default GradientButton;
