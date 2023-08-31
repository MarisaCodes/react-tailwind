import { useEffect, useRef, useState } from "react";
import ToggleTheme from "./components/ToggleTheme";
import { ThemeContext } from "./context/ThemeContext";
import GradientButton from "./components/GradientButton";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atelierSulphurpoolDark,
  atelierLakesideLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const Home = () => {
  const [mode, setMode] = useState("dark");
  const [codeTheme, setCodeTheme] = useState("dark");
  let elArr: HTMLDivElement[] = [];
  const codeEls = useRef(elArr);

  const code = `
  const Home = () => {
    return ( 
      <h1>Hello world!</h1>
     );
  }
   
  export default Home;`.trim();
  return (
    <ThemeContext.Provider value={mode}>
      <div className={mode}>
        <div className="dark:bg-gray-900 bg-slate-100 min-h-screen dark:text-gray-400 text-gray-800 transition-colors duration-300">
          <header className="p-4">
            <nav className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold dark:text-white">My App</h1>
              <ToggleTheme mode={mode} setMode={setMode} />
            </nav>
          </header>

          <main className="flex flex-col gap-10 md:px-32 md:py-10 p-4">
            <div className="rounded-lg shadow-lg p-6 dark:bg-gray-800 bg-white">
              <h2 className="text-lg font-semibold dark:text-white">
                Welcome to My App
              </h2>
              <p className="mt-2">
                This is a visually appealing layout with a dark slate blue
                background and light text. Toggle between dark mode and light
                mode using the button above.
              </p>
              <p className="mt-2 text-blue-400 dark:text-blue-600">
                <a href="#" className="hover:underline">
                  Learn more
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-3xl pb-5 font-semibold dark:text-white underline underline-offset-4 w-full">
                Toggle Theme:
              </h2>
              <ToggleTheme mode={mode} setMode={setMode} />
              <div className="flex flex-col">
                <div className="w-full flex items-center justify-between bg-gray-700 p-2 mt-4 rounded-t-lg">
                  <span className="text-gray-400">JSX</span>
                  <div className="flex gap-5 items-center">
                    <GradientButton
                      from="from-purple-500"
                      to="to-blue-500"
                      customClasses="after:content-['copy'] focus:text-emerald-500 focus:after:content-['copied']"
                      handleClick={() =>
                        navigator.clipboard.writeText(
                          codeEls.current[0]!.innerText
                        )
                      }
                    />

                    <ToggleTheme mode={codeTheme} setMode={setCodeTheme} />
                  </div>
                </div>
                <div ref={(e) => codeEls.current.push(e!)}>
                  <SyntaxHighlighter
                    language="jsx"
                    style={
                      codeTheme === "dark"
                        ? atelierSulphurpoolDark
                        : atelierLakesideLight
                    }
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div className="flex gap-5 flex-wrap items-center justify-center md:justify-normal">
              <h2 className="text-3xl pb-5 font-semibold dark:text-white underline underline-offset-4 w-full">
                Gradient Buttons:
              </h2>
              <GradientButton from="from-emerald-300" to="to-blue-500">
                Sign Up
              </GradientButton>
              <GradientButton from="from-indigo-500" to="to-pink-500">
                Login
              </GradientButton>
              <GradientButton from="from-purple-500" to="to-orange-500">
                Submit
              </GradientButton>
              <GradientButton from="from-red-500" to="to-yellow-500">
                <span className="px-7">Extra long</span>
              </GradientButton>
              <GradientButton from="from-teal-500" to="to-lime-500">
                Endless gradients...
              </GradientButton>
              <GradientButton from="from-cyan-500" to="to-blue-500">
                Yet another gradient
              </GradientButton>
              <div className="w-full">
                <GradientButton from="from-green-300 w-full" to="to-cyan-500">
                  <span>Full width Button</span>
                </GradientButton>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Home;
