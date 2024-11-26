import { Link } from "react-router-dom";
import Button from "./r.components/Button";

const NavBar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between bg-gray-200 py-10 px-14">
        <span>TradeCenter</span>
        <ul className="flex items-center justify-between gap-7">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/our-services">Our Services</Link>
          </li>
          <li>
            <Link to="/choose">Choose</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Button
          btnText="Get A Quote"
          btnStyle="rounded-full px-8 py-3"
          btnFunc={(evt) => {
            evt.preventDefault();
            console.log("You clicked the navbar button")
          }}
        />
      </nav>
    </header>
  );
};
export default NavBar;
