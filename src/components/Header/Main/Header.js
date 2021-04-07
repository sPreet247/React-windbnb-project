import Logo from '../Logo/Logo';
import NavExpand from '../NavSearch/NavExpand';
import NavSearch from '../NavSearch/NavSearch';
import { Wrapper } from './HeaderElements';
import { useState } from 'react';

const Header = () => {
  return (
    <>
      <Wrapper>
        {/* <Logo /> */}

        <NavSearch />
      </Wrapper>
    </>
  );
};

export default Header;
