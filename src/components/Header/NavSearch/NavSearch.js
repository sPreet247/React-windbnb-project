import { MdSearch } from 'react-icons/md';

import { Input } from './NavSearchElements';

const NavSearch = () => {
  return (
    <>
      <Input placeholder="Select location" />
      <Input placeholder="Add Guests" readonly />
      <MdSearch />
    </>
  );
};

export default NavSearch;
