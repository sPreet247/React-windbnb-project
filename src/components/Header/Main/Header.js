import Logo from '../Logo/Logo';
import NavExpand from '../NavSearch/NavExpand';
import NavSearch from '../NavSearch/NavSearch';
import { Wrapper } from './HeaderElements';
import { useState } from 'react';

const Header = () => {
  const [navExpand, setNavExpand] = useState(false);
  const handleClick = () => {
    setNavExpand(!navExpand);
  };
  return (
    <>
      <Wrapper>
        {navExpand ? handleClick() : <NavSearch />}
        {/* <Logo /> */}
      </Wrapper>
    </>
  );
};

export default Header;
