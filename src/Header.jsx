import Logo from "./Logo";
import MenuBar from "./MenuBar";

import './header.scss';

const Header = () => {
  return (
    <header className="app--header">
      <Logo />
      <MenuBar/>
    </header>
  );
};

export default Header;
