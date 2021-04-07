import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import { Button, Font, Nav } from './NavSearchElements';
import NavExpand from './NavExpand';

const NavSearch = () => {
  const [navExpand, setNavExpand] = useState(false);

  return (
    <>
      <Nav>
        {navExpand ? <NavExpand /> : null}
        <Button onClick={() => setNavExpand(!navExpand)}>
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
