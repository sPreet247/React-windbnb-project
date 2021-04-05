import Logo from '../Logo/Logo';
import NavExpand from '../NavSearch/NavExpand';
import NavSearch from '../NavSearch/NavSearch';
import { Wrapper } from './HeaderElements';

const Header = () => {
  return (
    <>
      <Wrapper>
        {/* <Logo /> */}
        <NavExpand />
        {/* <NavSearch /> */}
      </Wrapper>
    </>
  );
};

export default Header;
