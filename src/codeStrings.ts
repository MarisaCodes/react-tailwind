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
export const navbarCode = `
 import Nav from "./components/navbar/Nav";
 import Brand from "./components/navbar/Brand";
 import Burger from "./components/navbar/Burger";
 import Menu from "./components/navbar/Menu";
 import Navactions from "./components/navbar/Navactions";
 import reactLogo from "./assets/react.svg";
 import GradientButton from "./components/GradientButton";
 const Navbar = () => {
   return (
     <Nav>
       <Brand logo={reactLogo} text="React" />
       <Burger />
       <Menu>
         <a href="#" className="link">
           About
         </a>
         <a href="#" className="link">
           Services
         </a>
         <a href="#" className="link">
           Contact
         </a>
         <a href="#" className="link">
           Redeem
         </a>
       </Menu>
       <Navactions>
         <GradientButton from="from-red-500" to="to-yellow-500">
           Sign Up
         </GradientButton>
         <GradientButton from="from-cyan-500" to="to-blue-500">
           Login
         </GradientButton>
         <GradientButton from="from-purple-500" to="to-blue-500">
           Action
         </GradientButton>
       </Navactions>
     </Nav>
   );
 };
 
 export default Navbar;
`.trim();
