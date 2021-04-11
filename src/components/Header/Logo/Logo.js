import logo from '../../../../assets/logo.svg';
import { LogoImg } from './LogoElements';
const Logo = () => {
  return (
    <>
      <img src={logo} style={{ height: 100, width: 150 }} alt="Logo" />
    </>
  );
};

export default Logo;
