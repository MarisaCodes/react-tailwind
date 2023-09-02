export const toggleThemeCode = `
import ToggleTheme from "./components/ToggleTheme";
import { ThemeContext } from "./context/ThemeContext";

const Home = () => {
  const [mode, setMode] = useState("dark");

  return (
    <ThemeContext.Provider value={mode}>
    {/* code ... */}
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
          {/* code ... */}
        </div>
      </div>
    {/* code ... */}
    </ThemeContext.Provider>
  )
}
 `.trim();

export const navbar1Code = `
import GradientButton from "./GradientButton";
import Burger from "./navbar/Burger";
import Menu from "./navbar/Menu";
import Nav from "./navbar/Nav";
import Navactions from "./navbar/Navactions";
import reactLogo from "../assets/react.svg";
import Brand from "./navbar/Brand";
import Avatar from "./Avatar";
import avatar from "../assets/tailwind.svg";
const Navbar = () => {
  return (
    <Nav>
      <Brand logo={reactLogo} text="React" />
      <Burger />
      <Menu>
        <a href="#" className="link lg:py-6">
          About
        </a>
        <a href="#" className="link">
          Services
        </a>
        <a href="#" className="link">
          Contact
        </a>
        <a href="#" className="link">
          link
        </a>
      </Menu>
      <Navactions>
        <GradientButton from="from-red-500" to="to-yellow-500">
          Sign Up
        </GradientButton>
        <GradientButton from="from-pink-500" to="to-zinc-500">
          Login
        </GradientButton>
        <Avatar avatar={avatar}>
          <a href="#" className="link">
            link 1
          </a>
          <a href="#" className="link">
            link 2
          </a>
          <a href="#" className="link">
            link 3
          </a>
          <GradientButton from="from-zinc-500" to="to-yellow-500">
            Action
          </GradientButton>
        </Avatar>
      </Navactions>
    </Nav>
  );
};

export default Navbar;
`.trim();

export const navCode = `const Nav = ({
  children,
  id = "main-menu",
}: {
  children: ReactNode;
  id?: string;
}) => {
  // Nav component code ...
}
`.trim();
export const brandCode = `const Brand = ({
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
`.trim();
export const burgerCode = `
const Burger = ({ htmlFor = "main-menu" }: { htmlFor?: string }) => {}
`.trim();

export const menuCode = `
const Menu = ({
  children,
  id = "more",
  gapOverride = "lg:gap-7",
}: {
  children: ReactNode;
  id?: string;
  gapOverride?: string;
}) => {}
`.trim();

export const navactionCode = `
const Navactions = ({ children }: { children: ReactNode }) => {}
`.trim();

export const navbar2Code = `
import GradientButton from "./GradientButton";
import Nav from "./navbar/Nav";
import Burger from "./navbar/Burger";
import Brand from "./navbar/Brand";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwind.svg";
import Navactions from "./navbar/Navactions";
import Avatar from "./Avatar";
import Menu from "./navbar/Menu";
import ghLogo from "../assets/github.svg";
import npmLogo from "../assets/npm.svg";
import BlockNavItem from "./navbar/BlockNavItem";

const Navbar2 = () => {
  return (
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
  );
};

export default Navbar2;
`.trim();

export const navbar3Code = `
import Nav from "./navbar/Nav";
import Burger from "./navbar/Burger";
import Brand from "./navbar/Brand";
import tailwindLogo from "../assets/tailwind.svg";
import Menu from "./navbar/Menu";
import ghLogo from "../assets/github.svg";
import npmLogo from "../assets/npm.svg";
import BlockNavItem from "./navbar/BlockNavItem";

const Navbar3 = () => {
  return (
    <Nav id="navbar3-example">
      <Brand logo={tailwindLogo} text="Tailwind" />
      <Burger htmlFor="navbar3-example" />
      <Menu id="navbar3-more" gapOverride="lg:gap-0">
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
    </Nav>
  );
};

export default Navbar3;
`.trim();
