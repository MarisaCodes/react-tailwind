import { Dispatch, SetStateAction } from "react";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
const ToggleTheme = ({
  mode,
  setMode,
}: {
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
}) => {
  const darkClasses = {
    btn: `bg-gray-800 border-slate-600 pl-1`,
    span: `translate-x-full bg-gray-300`,
  };
  return (
    <button
      className={
        mode === "dark"
          ? "h-8 flex items-center w-16 rounded-full border-2 " +
            darkClasses.btn
          : "bg-yellow-300 h-8 flex items-center w-16 rounded-full border-2 border-yellow-400"
      }
      onClick={() => (mode === "dark" ? setMode("") : setMode("dark"))}
    >
      <span
        className={
          mode === "dark"
            ? "flex items-center justify-center transform transition-transform duration-300 rounded-full h-7 w-7 " +
              darkClasses.span
            : "flex items-center justify-center bg-white transform transition-transform duration-300 rounded-full h-7 w-7"
        }
      >
        {mode === "dark" ? (
          <img
            src={moon}
            alt="sun icon"
            className="h-4/6 aspect-square object-scale-down"
          />
        ) : (
          <img
            src={sun}
            alt="sun icon"
            className="h-4/6 aspect-square object-scale-down"
          />
        )}
      </span>
    </button>
  );
};

export default ToggleTheme;
