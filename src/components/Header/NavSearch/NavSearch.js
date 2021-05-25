import { MdSearch } from 'react-icons/md';
import AppContext from '../../../context/AppContext';
import { useContext } from 'react';
import '../../../styles.css';
import { Input, Nav, Wrapper, Button } from './NavSearchElements';
import { WrapperG } from '../GuestDropdown/GuestDropdownElements';

import LocationDropdown from '../LocationDropdown/LocationDropdown';
import GuestDropdown from '../GuestDropdown/GuestDropdown';

const NavSearch = () => {
  const {
    location,
    setLocation,
    isOpen,
    setIsOpen,
    navExpand,
    setNavExpand,
    adult,
    setAdult,
    child,
    setChild,

    setSearchActive,
  } = useContext(AppContext);

  const Toggle = () => {
    setNavExpand(!navExpand);
  };

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
            <Input
              placeholder="Select Location"
              disabled
              onClick={() => setSearchActive(true)}
            />
            <Input
              placeholder="Add Guests"
              disabled
              onClick={() => setSearchActive(true)}
            />
          </div>
          <Button>
            <MdSearch size={35} style={{ color: '#eb5757' }} />
          </Button>
        </Nav>
      )}
    </>
  );
};

export default NavSearch;
