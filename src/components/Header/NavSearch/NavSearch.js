import { MdSearch } from 'react-icons/md';
import AppContext from '../../../context/AppContext';
import { useEffect, useState, useContext } from 'react';
import { Input, Nav, Wrapper, Button } from './NavSearchElements';

import LocationDropdown from '../LocationDropdown/LocationDropdown';
import GuestDropdown from '../GuestDropdown/GuestDropdown';

function NavSearch() {
  const { location, setLocation } = useContext(AppContext);
  const [guests, setGuests] = useState('Guests');

  const [navExpand, setNavExpand] = useState(false);
  const Toggle = () => {
    setNavExpand(!navExpand);
  };

  const [isOpen, setIsOpen] = useState(false);
  const Open = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {});

  return (
    <>
      {navExpand ? (
        <Wrapper>
          <Nav expand onClick={Open}>
            <Input placeholder="Location" expandInput radius value={location} />

            <Input placeholder="Guests" expandInput value={guests} />

            <Button expandBtn onClick={Toggle}>
              <MdSearch size={25} style={{ color: '#ffffff' }} />
              Search
            </Button>
          </Nav>
          {isOpen ? (
            <LocationDropdown setLocation={setLocation} />
          ) : (
            <GuestDropdown setGuests={setGuests} />
          )}
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
