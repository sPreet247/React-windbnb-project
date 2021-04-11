import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import {
  Button,
  Font,
  Nav,
  Wrapper,
  Location,
  TopNavText,
  AddGuest,
  SearchEx,
  SearchText,
} from './NavSearchElements';

const NavSearch = () => {
  const [navExpand, setNavExpand] = useState(false);
  const Toggle = () => {
    setNavExpand(!navExpand);
  };

  return (
    <>
      {navExpand ? (
        <Wrapper>
          <Nav expand>
            <Button expandBtn>
              <Location>
                <TopNavText>Location</TopNavText>
                <Font expandFont>Select Location</Font>
              </Location>

              <AddGuest>
                <TopNavText>Guests</TopNavText>
                <Font expandFont>Add guests</Font>
              </AddGuest>
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
      ) : (
        <Nav>
          <Button onClick={Toggle}>
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
      )}
    </>
  );
};

export default NavSearch;
