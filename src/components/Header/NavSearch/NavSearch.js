import { MdSearch } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { Button, Font, Nav } from './NavSearchElements';
import NavExpand from './NavExpand';
import {
  Wrapper,
  Location,
  TopNavText,
  AddGuest,
  SearchEx,
  SearchText,
  Font1,
  Nav1,
  Button1,
} from './NavExpandElements';

const NavSearch = () => {
  const [navExpand, setNavExpand] = useState(false);
  const Toggle = () => {
    setNavExpand(!navExpand);
  };

  return (
    <>
      {navExpand ? (
        <Wrapper>
          <Nav1>
            <Button1>
              <Location>
                <TopNavText>Location</TopNavText>
                <Font1>Select Location</Font1>
              </Location>

              <AddGuest>
                <TopNavText>Guests</TopNavText>
                <Font1>Add guests</Font1>
              </AddGuest>
              <div>
                <SearchEx onClick={Toggle}>
                  <Font1>
                    <MdSearch size={35} style={{ color: '#ffffff' }} />
                    <SearchText>Search</SearchText>
                  </Font1>
                </SearchEx>
              </div>
            </Button1>
          </Nav1>
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
