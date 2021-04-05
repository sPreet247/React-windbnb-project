import { MdSearch } from 'react-icons/md';

import { Button, Font, Nav, Location } from './NavExpandElements';

const NavExpand = () => {
  return (
    <>
      <Nav>
        <Button>
          <Location>
            <Font>Select Location</Font>
          </Location>

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

export default NavExpand;
