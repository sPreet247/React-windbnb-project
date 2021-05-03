import { MdSearch } from 'react-icons/md';
import AppContext from '../../../context/AppContext';
import { useState, useContext } from 'react';
import { Input, Nav, Wrapper, Button } from './NavSearchElements';
import { WrapperG } from '../GuestDropdown/GuestDropdownElements';

import LocationDropdown from '../LocationDropdown/LocationDropdown';
import GuestDropdown from '../GuestDropdown/GuestDropdown';

function NavSearch() {
  const {
    location,
    setLocation,
    count,
    setCount,
    navExpand,
    setNavExpand,
    adult,
    setAdult,
    child,
    setChild,
  } = useContext(AppContext);

  const Toggle = () => {
    setNavExpand(!navExpand);
  };

  const [isOpen, setIsOpen] = useState(false);
  const Open = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {navExpand ? (
        <Wrapper>
          <Nav expand onClick={Open}>
            <Input placeholder="Location" expandInput radius value={location} />

            <Input
              placeholder="Guests"
              expandInput
              value={`${adult + child} Guests `}
            />

            <Button expandBtn onClick={Toggle}>
              <MdSearch size={25} style={{ color: '#ffffff' }} />
              Search
            </Button>
          </Nav>
          {isOpen ? (
            <LocationDropdown setLocation={setLocation} />
          ) : (
            <WrapperG>
              <GuestDropdown
                count={count}
                setCount={setCount}
                adult={adult}
                setAdult={setAdult}
                child={child}
                setChild={setChild}
              />
            </WrapperG>
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
