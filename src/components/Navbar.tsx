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
          link
        </a>
      </Menu>

    </Nav>
  );
};

export default Navbar;
