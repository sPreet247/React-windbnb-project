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
} from './NavExpandElements';

import StayData from '../../../Data/Data.json';

const NavExpand = () => {
  const cities = [
    'Helsinki, Finland',
    'Turku, Finland',
    'Oulu, Finland',
    'Vaasa, Finland',
  ];

  return (
    <>
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
          <SearchEx>
            <Font>
              <MdSearch size={35} style={{ color: '#ffffff' }} />
              <SearchText>Search</SearchText>
            </Font>
          </SearchEx>
        </Button>
      </Nav>
    </>
  );
};

export default NavExpand;
