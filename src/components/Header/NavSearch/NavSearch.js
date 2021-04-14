import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import { Input, Nav, Wrapper, Button } from './NavSearchElements';

import LocationDropdown from '../LocationDropdown/LocationDropdown';

function NavSearch() {
  const [navExpand, setNavExpand] = useState(false);
  const Toggle = () => {
    setNavExpand(!navExpand);
  };

  return (
    <>
      {navExpand ? (
        <Wrapper>
          <Nav expand>
            <Input placeholder="Location" expandInput radius />

            <Input placeholder="Guests" expandInput />

            <Button expandBtn onClick={Toggle}>
              <MdSearch size={25} style={{ color: '#ffffff' }} />
              Search
            </Button>
            <LocationDropdown />
          </Nav>
        </Wrapper>
      ) : (
        <Nav>
          <div onClick={Toggle}>
            <Input placeholder="Select Location" disabled />
            <Input placeholder="Add Guests" disabled />
          </div>
          <Button>
            <MdSearch size={35} style={{ color: '#eb5757' }} />
          </Button>
        </Nav>
      )}
    </>
  );
}

export default NavSearch;
