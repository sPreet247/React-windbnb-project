import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import {
  Input,
  Font,
  Nav,
  Wrapper,
  Location,
  TopNavText,
  AddGuest,
  SearchEx,
  SearchText,
  Button,
} from './NavSearchElements';

// import LocationDropdown from '../LocationDropdown/LocationDropdown';

function NavSearch() {
  const [navExpand, setNavExpand] = useState(false);
  const Toggle = () => {
    setNavExpand(!navExpand);
  };

  return (
    <>
      <Wrapper>
        <Nav expand>
          <Input placeholder="Location" expandInput />

          <Input placeholder="Guests" expandInput />

          <Button expandBtn>
            <MdSearch size={35} style={{ color: '#ffffff' }} />
            Search
          </Button>
        </Nav>
      </Wrapper>

      {/* <Nav>
          <Input placeholder="Select Location" />
          <Input placeholder="Add Guests" />
          <Button>
            <MdSearch size={35} style={{ color: '#eb5757' }} />
          </Button>
        </Nav> */}
    </>
  );
}

export default NavSearch;
