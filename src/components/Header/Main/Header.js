import Logo from '../Logo/Logo';

import NavSearch from '../NavSearch/NavSearch';
import { Wrapper } from './HeaderElements.js';

const Header = () => {
  return (
    <>
      <Wrapper>
        <Logo />
        <NavSearch />
      </Wrapper>
    </>
  );
};

export default Header;
