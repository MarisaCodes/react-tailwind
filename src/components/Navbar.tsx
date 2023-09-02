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
      <Navactions>
        <GradientButton from="from-red-500" to="to-yellow-500">
          Sign Up
        </GradientButton>
        <GradientButton from="from-pink-500" to="to-zinc-500">
          Login
        </GradientButton>
        {/* <GradientButton from="from-zinc-500" to="to-yellow-500">
          Action
        </GradientButton> */}
        <Avatar avatar={avatar} objectFit="object-scale-down">
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
