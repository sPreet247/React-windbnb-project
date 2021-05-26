import logo from '../../../../assets/logo.svg';
import Description from '../Description/Description';
import NavSearch from '../NavSearch/NavSearch';
import { Wrapper } from './HeaderElements.js';
const Header = () => {
  return (
    <>
      <Wrapper>
        <img src={logo} style={{ height: 100, width: 150 }} alt="Logo" />
        <NavSearch />
        <Description />
      </Wrapper>
    </>
  );
};

export default Header;
