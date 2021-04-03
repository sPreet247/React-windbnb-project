import { MdSearch } from 'react-icons/md';

import { Button, Font } from './NavSearchElements';

const NavSearch = () => {
  return (
    <>
      <nav>
        <Button noRightBorder>
          <Font>Select Location</Font>
        </Button>

        <Button noBorder>
          <Font>Add guests</Font>
        </Button>
        <Button noLeftBorder>
          <MdSearch size={40} style={{ color: '#EB5757' }} />
        </Button>
      </nav>
    </>
  );
};

export default NavSearch;
