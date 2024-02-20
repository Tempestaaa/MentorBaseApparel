import "./Header.css";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
