import { MdSearch } from 'react-icons/md';

import { Button, Font } from './NavSearchElements';

const NavSearch = () => {
  return (
    <>
      <Button>
        <Font>Select Location</Font>
      </Button>
      <Button>
        <Font>Add guests</Font>
      </Button>
      <Button>
        <MdSearch />
      </Button>
    </>
  );
};

export default NavSearch;
