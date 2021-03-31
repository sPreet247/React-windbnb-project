import Logo from '../Logo/Logo';
import NavSearch from '../NavSearch/NavSearch';
import { Wrapper } from './HeaderElements';

const Header = () => {
  return (
    <>
      <Logo />
      <Wrapper>
        <NavSearch />
      </Wrapper>
    </>
  );
};

export default Header;
