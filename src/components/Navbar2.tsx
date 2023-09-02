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
