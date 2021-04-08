import { MdSearch, MdPlace } from 'react-icons/md';

import {
  Button,
  Font,
  Nav,
  Location,
  SearchEx,
  AddGuest,
  TopNavText,
  SearchText,
  Wrapper,
} from './NavExpandElements';

const NavExpand = () => {
  return (
    <Wrapper>
      <Nav>
        <Button>
          <Location>
            <TopNavText>Location</TopNavText>
            <Font>Select Location</Font>
          </Location>

          <AddGuest>
            <TopNavText>Guests</TopNavText>
            <Font>Add guests</Font>
          </AddGuest>
          <div>
            <SearchEx>
              <Font>
                <MdSearch size={35} style={{ color: '#ffffff' }} />
                <SearchText>Search</SearchText>
              </Font>
            </SearchEx>
          </div>
        </Button>
      </Nav>
    </Wrapper>
  );
};

export default NavExpand;
