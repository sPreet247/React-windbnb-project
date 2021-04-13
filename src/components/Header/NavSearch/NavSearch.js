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

import LocationDropdown from '../LocationDropdown/LocationDropdown';

function NavSearch() {
  const [navExpand, setNavExpand] = useState(false);
  const Toggle = () => {
    setNavExpand(!navExpand);
  };

  return (
    <>
      {/* {navExpand ? (
        <Wrapper>
          <Nav expand>
            <Button expandBtn>
              <div>
                <Location>
                  <TopNavText>Location</TopNavText>
                  <Font expandFont>Select Location</Font>
                </Location>
              </div>
              <LocationDropdown />
              <div>
                <AddGuest>
                  <TopNavText>Guests</TopNavText>
                  <Font expandFont>Add guests</Font>
                </AddGuest>
              </div>
              <div>
                <SearchEx onClick={Toggle}>
                  <Font expandFont>
                    <MdSearch size={35} style={{ color: '#ffffff' }} />
                    <SearchText>Search</SearchText>
                  </Font>
                </SearchEx>
              </div>
            </Button>
          </Nav>
        </Wrapper>
      ) : ( */}
      <Nav>
        <Input placeholder="Select Location" />
        <Input placeholder="Add Guests" />
        <Button>
          <MdSearch size={35} style={{ color: '#ffffff' }} />
        </Button>
      </Nav>
    </>
  );
}

export default NavSearch;
