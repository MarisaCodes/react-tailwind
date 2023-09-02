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
