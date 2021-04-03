import { MdSearch } from 'react-icons/md';

import { Button, Font, Nav } from './NavSearchElements';

const NavSearch = () => {
  return (
    <>
      <Nav>
        <Button>
          <Font>Select Location</Font>

          <Font>Add guests</Font>
          <Font>
            <MdSearch size={35} style={{ color: '#EB5757' }} />
          </Font>
        </Button>
      </Nav>
    </>
  );
};

export default NavSearch;
