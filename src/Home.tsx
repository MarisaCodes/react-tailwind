import { useRef, useState } from "react";
import ToggleTheme from "./components/ToggleTheme";
import { ThemeContext } from "./context/ThemeContext";
import GradientButton from "./components/GradientButton";
import CodeBlock from "./components/CodeBlock";

const Home = () => {
  const [mode, setMode] = useState("dark");
  let elArr: HTMLDivElement[] = [];
  const codeEls = useRef(elArr);
  const toggleThemeCode = `
  // Usage
  import { useState } from "react";
  import { ThemeContext } from "./context/ThemeContext";
  import ToggleTheme from "./components/ToggleTheme";
  
  const [mode, setMode] = useState("dark");
  const Component = () => {
    return (
    <ThemeContext.Provider value={mode}>
    // later you can consume this context in deeply nested components without prop drilling
      // ...code
      <ToggleTheme mode={mode} setMode={setMode} />
      // ...code
      <h1>Hello world!</h1>
      // ...code
    </ThemeContext.Provider>
     );
  }
   
  export default Component;`.trim();
  return (
    <ThemeContext.Provider value={mode}>
      <div className={mode}>
        <div className="dark:bg-gray-900 bg-slate-100 min-h-screen dark:text-gray-400 text-gray-800 transition-colors duration-300">
          <header className="p-4">
            <nav className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold dark:text-white">
                React-Tailwind
              </h1>
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
              <p className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-blue-400 dark:text-blue-600"
                >
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
                <CodeBlock codeEls={codeEls} code={toggleThemeCode} />
                <div className="pt-5 pb-4 flex flex-col gap-5">
                  <a
                    className="hover:underline text-blue-400 dark:text-blue-600 w-fit"
                    href="https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually"
                  >
                    Tailwind css dark mode `class` strategy
                  </a>
                  <a
                    href="https://react.dev/learn/passing-data-deeply-with-context"
                    className="hover:underline text-blue-400 dark:text-blue-600 w-fit"
                  >
                    Learn React Context
                  </a>

                  <p className="font-bold">
                    Note: Changing the context within the provider wrapper won't
                    work as expected with the tailwind css `class` strategy.
                    This is intuitive and not a problem but I faced this issue
                    while coding so I thought to mention it.
                  </p>
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
