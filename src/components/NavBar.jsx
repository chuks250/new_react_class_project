import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./r.components/Button";

const NavBar = ({ logoText, links, buttonText, buttonStyle, buttonAction }) => {
  return (
    <header>
      <nav className="flex items-center justify-between bg-gray-200 py-10 px-14">
        <span>{logoText}</span>
        <ul className="flex items-center justify-between gap-7">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <Button
          btnText={buttonText}
          btnStyle={buttonStyle}
          btnFunc={buttonAction}
        />
      </nav>
    </header>
  );
};

NavBar.propTypes = {
  logoText: PropTypes.string.isRequired,
  links: PropTypes.string,
  buttonText: PropTypes.string,
  buttonStyle: PropTypes.string,
  buttonAction: PropTypes.func,
};

export default NavBar;
