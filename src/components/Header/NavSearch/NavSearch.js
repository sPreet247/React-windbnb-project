import { MdSearch } from 'react-icons/md';

import { Button, Font, Nav } from './NavSearchElements';

const NavSearch = () => {
  return (
    <>
      <Nav>
        <Button>
          <div>
            <Font>Select Location</Font>
          </div>

          <div>
            <Font>Add guests</Font>
          </div>
          <div>
            <Font>
              <MdSearch size={35} style={{ color: '#EB5757' }} />
            </Font>
          </div>
        </Button>
      </Nav>
    </>
  );
};

export default NavSearch;
