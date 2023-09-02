import { useRef, useState } from "react";
import ToggleTheme from "./components/ToggleTheme";
import { ThemeContext } from "./context/ThemeContext";
import GradientButton from "./components/GradientButton";
import CodeBlock from "./components/CodeBlock";
import { navbar1Code, toggleThemeCode } from "./codeStrings";
import Navbar from "./components/Navbar";
import Nav from "./components/navbar/Nav";
import Burger from "./components/navbar/Burger";
import Brand from "./components/navbar/Brand";
import reactLogo from "./assets/react.svg";
import tailwindLogo from "./assets/tailwind.svg";
import Navactions from "./components/navbar/Navactions";
import Avatar from "./components/Avatar";
import Menu from "./components/navbar/Menu";
import ghLogo from "./assets/github.svg";
import npmLogo from "./assets/npm.svg";
import BlockNavItem from "./components/navbar/BlockNavItem";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atelierLakesideLight,
  atelierSulphurpoolDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const Home = () => {
  const [mode, setMode] = useState("dark");
  let elArr: HTMLDivElement[] = [];
  const codeEls = useRef(elArr);

  return (
    <ThemeContext.Provider value={mode}>
      <div className={mode + " h-full"}>
        <div className="dark:bg-gray-900 h-full bg-slate-100 min-h-screen dark:text-gray-400 text-gray-800 transition-colors duration-300">
          <header className="sticky top-0 z-50">
            <Nav id="home-navbar">
              <Brand logo={reactLogo} text="React-Tailwind" />
              <Burger htmlFor="home-navbar" />
              <Menu id="home-more" gapOverride="lg:gap-0">
                <BlockNavItem>
                  <a href="#" className="flex gap-3 items-center">
                    <span className="hidden lg:block">Github repo</span>
                    <img
                      className="flex max-w-none py-1 md:py-0"
                      src={ghLogo}
                      alt="github logo"
                      width={30}
                    />
                  </a>
                </BlockNavItem>
                <BlockNavItem>
                  <a href="#">
                    <img
                      src={npmLogo}
                      alt="npm logo"
                      className="max-w-none"
                      width={50}
                    />
                  </a>
                </BlockNavItem>
              </Menu>
              <Navactions>
                <ToggleTheme mode={mode} setMode={setMode} />
                <GradientButton from="from-yellow-500" to="to-zinc-500">
                  Get started
                </GradientButton>
                <Avatar avatar={tailwindLogo} id="home-avatar">
                  <a href="https://tailwindcss.com/" className="link">
                    Tailwind
                  </a>
                </Avatar>
              </Navactions>
            </Nav>
          </header>

          <main className="flex flex-col gap-10 md:px-32 md:py-10 p-4">
            <div>
              <h2 className="subheading">Toggle Theme</h2>
              <ToggleTheme mode={mode} setMode={setMode} />
              <div className="flex flex-col">
                <CodeBlock codeEls={codeEls} code={toggleThemeCode} index={0} />
                <div className="pt-5 pb-4 flex flex-col gap-5">
                  <div>
                    <h3 className="text-3xl dark:text-white text-gray-800 pb-3">
                      What you should do:
                    </h3>
                    <p className="text-lg">
                      You should use react context or any state management
                      strategy to provide the current theme state (i.e. either
                      dark mode or light mode). This step makes sense if you are
                      using tailwind class strategy for managing the theme. The
                      end goal of this step is to create a wrapper div with
                      className that is equal to the current theme (either
                      "dark" or "").
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl dark:text-white text-gray-800 pb-3">
                      What you don't need to do:
                    </h3>
                    <p className="text-lg">
                      The element{" "}
                      <strong className="text-blue-500">
                        &lt;ToggleTheme mode=&#123;mode&#125;
                        setMode=&#123;setMode&#125; /&gt;
                      </strong>{" "}
                      is provided as an export so you do not need to hardcode
                      it. You have to provide{" "}
                      <strong className="text-blue-500">mode</strong> and{" "}
                      <strong className="text-blue-500">setMode</strong> however
                      which are created using{" "}
                      <strong className="text-blue-500">useState</strong>.
                      <br />
                      <br />
                      PS: In my opinion using context makes the DX easier. If
                      you are using Next.js then the fact that you have to use a
                      client component for your wrappers shouldn't scare you
                      away because client components can have server component
                      children. I am not an expert on this topic but the
                      following link can certainly help:{" "}
                      <a
                        href="https://github.com/vercel/next.js/discussions/43153"
                        className="link"
                      >
                        Client components having server rendered children?
                      </a>
                    </p>
                  </div>
                  <a
                    className="link"
                    href="https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually"
                  >
                    Tailwind css dark mode `class` strategy
                  </a>
                  <a
                    href="https://react.dev/learn/passing-data-deeply-with-context"
                    className="link"
                  >
                    Learn React Context
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="subheading">Navbar</h2>
              <Navbar />
              <CodeBlock codeEls={codeEls} code={navbar1Code} index={1} />
              <div>
                <h3 className="text-3xl dark:text-white underline">
                  Components and props
                </h3>
                <div className="my-10">
                  <h3 className="text-4xl my-5 text-blue-500 font-bold">
                    {"<Nav />"}
                  </h3>
                  <SyntaxHighlighter
                    language="typescript"
                    style={
                      mode === "dark"
                        ? atelierSulphurpoolDark
                        : atelierLakesideLight
                    }
                  >
                    {`
const Nav = ({
  children,
  id = "main-menu",
}: {
  children: ReactNode;
  id?: string;
}) => {
  // Nav component code ...
}
`.trim()}
                  </SyntaxHighlighter>
                  <p className="my-10 text-lg">
                    The component{" "}
                    <strong className="text-blue-500 font-bold">
                      {"<Nav>{children}</Nav>"}
                    </strong>
                    has an optional{" "}
                    <strong className="text-blue-500 font-bold">prop </strong>
                    called{" "}
                    <strong className="text-blue-500 font-bold"> id</strong>.
                    This{" "}
                    <strong className="text-blue-500 font-bold"> id</strong>{" "}
                    prop has a default value. The value (whether default or
                    passed as a prop by you) is fed into a checkbox input. This
                    is used when a user is on phone, they can access the main
                    navigation menu using a burger button that has pure css
                    functionality, save for detecting outside clicks. You do not
                    need to concern yourself with it if your app uses only one
                    navbar component. Since it already has a default fallback
                    value you don't have to worry about passing anything here
                    for <strong className="text-blue-500 font-bold"> id</strong>
                    . Otherwise if you need more than one navbar for whatever
                    reason then in any navbar after the first one you can pass
                    the <strong className="text-blue-500 font-bold"> id</strong>{" "}
                    prop but it should be different from the default which is
                    <strong className="text-yellow-500 font-bold">
                      {" "}
                      "main-menu"
                    </strong>{" "}
                    (goes without saying you shouldn't reuse ids, basic html).
                  </p>
                  <h3 className="text-4xl my-5 text-blue-500 font-bold">
                    {"<Brand />"}
                  </h3>
                  <SyntaxHighlighter
                    language="javascript"
                    style={
                      mode === "dark"
                        ? atelierSulphurpoolDark
                        : atelierLakesideLight
                    }
                  >
                    {`
const Brand = ({
  logo,
  text,
  width = 45,
  objectFit = "object-scale-down",
}: {
  logo: string;
  text: string;
  width?: number;
  objectFit?: string;
}) => {}
`.trim()}
                  </SyntaxHighlighter>
                  <p className="my-10 text-lg">
                    This is the{" "}
                    <strong className="text-blue-500">
                      {" "}
                      {"<Brand logo={logo} text={text}/>"}{" "}
                    </strong>
                    component. <strong className="text-blue-500"> logo </strong>
                    and <strong className="text-blue-500"> text </strong> are
                    necessary props. In the above navbar example I used the
                    react logo
                    <img
                      src={reactLogo}
                      className="mx-2 inline"
                      width={20}
                      alt=""
                    />
                    and the text was <strong>React</strong>. The{" "}
                    <strong className="text-blue-500">width</strong>
                    and <strong className="text-blue-500">objectFit</strong>
                    are optional props, their default values are
                    <strong className="text-yellow-500"> 45 </strong>
                    and a tailwind class{" "}
                    <strong className="text-yellow-500">
                      "object-scale-down"{" "}
                    </strong>
                    respectively
                  </p>
                  <h3 className="text-4xl my-5 text-blue-500 font-bold">
                    {"<Burger />"}
                  </h3>
                  <SyntaxHighlighter
                    language="javascript"
                    style={
                      mode === "dark"
                        ? atelierSulphurpoolDark
                        : atelierLakesideLight
                    }
                  >
                    {`
const Burger = ({ htmlFor = "main-menu" }: { htmlFor?: string }) => {}
`.trim()}
                  </SyntaxHighlighter>
                  <p className="my-10 text-lg">
                    This is the{" "}
                    <strong className="text-blue-500"> {"<Burger />"} </strong>
                    component. It contains a clickable{" "}
                    <strong className="text-blue-500">
                      {"<label htmlFor={htmlFor}></label>"}{" "}
                    </strong>
                    element that corresponds to the checkbox input element in
                    the <strong className="text-blue-500">{"<Nav />"} </strong>
                    component. As before, you need not pass any props here
                    except if you have more than one navbar to help the html
                    differentiate between the inputs so that they don't all have
                    the same id.
                  </p>

                  <h3 className="text-4xl my-5 text-blue-500 font-bold">
                    {"<Menu /> and <Navactions />"}
                  </h3>

                  <SyntaxHighlighter
                    language="javascript"
                    style={
                      mode === "dark"
                        ? atelierSulphurpoolDark
                        : atelierLakesideLight
                    }
                  >
                    {`
const Menu = ({
  children,
  id = "more",
  gapOverride = "lg:gap-7",
}: {
  children: ReactNode;
  id?: string;
  gapOverride?: string;
}) => {}
`.trim()}
                  </SyntaxHighlighter>
                  <p className="my-10 text-lg">
                    Again, as before, the{" "}
                    <strong className="text-blue-500">id </strong>
                    prop serves the same purpose for checkbox identification.
                    You need not pass anything unless you have multiple navbars.
                    And again, avoid the default if you didn't override it in
                    the first navbar and make it unique. This time, the button
                    is labelled `more` and it appears for tablets. You can play
                    with your browser and resize your window to see the
                    responsiveness. The{" "}
                    <strong className="text-blue-500">children </strong>
                    of <strong className="text-blue-500">{"<Menu />"} </strong>
                    are supposed to be{" "}
                    <strong className="text-blue-500">
                      {
                        '<a href="#" className="hover:underline text-blue-400 dark:text-blue-600">a tags</a>'
                      }
                    </strong>
                    . However, you can override the style in the above example
                    by changing the gap size at the lg break-point. This is
                    discussed more clearly in the next example, for the above
                    type of navbar you don't need to do anything else.
                  </p>
                </div>
              </div>
              <Nav id="blockitems-example">
                <Brand logo={tailwindLogo} text="Tailwind" />
                <Burger htmlFor="blockitems-example" />
                <Menu id="blockitems-more" gapOverride="lg:gap-0">
                  <BlockNavItem>
                    <a href="#" className="flex items-center gap-3 lg:py-1">
                      <span className="hidden lg:block">Github</span>
                      <img
                        src={ghLogo}
                        alt=""
                        className="max-w-none py-1 md:py-0"
                        width={35}
                      />
                    </a>
                  </BlockNavItem>
                  <BlockNavItem>
                    <a href="#" className="flex items-center gap-3">
                      <img src={npmLogo} alt="" width={35} />
                    </a>
                  </BlockNavItem>
                  <BlockNavItem>
                    <a href="#" className="flex items-center gap-3">
                      Random link
                    </a>
                  </BlockNavItem>
                </Menu>
                <Navactions>
                  <GradientButton from="from-red-500" to="to-zinc-500">
                    Action
                  </GradientButton>
                  <Avatar avatar={reactLogo} id="block-example">
                    <a href="#" className="link w-full">
                      link 1
                    </a>
                    <a href="#" className="link w-full">
                      link 2
                    </a>
                    <a href="#" className="link w-full">
                      link 3
                    </a>
                  </Avatar>
                </Navactions>
              </Nav>
            </div>

            <div className="flex gap-5 flex-wrap items-center justify-center md:justify-normal">
              <h2 className="subheading">Gradient Button</h2>
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
