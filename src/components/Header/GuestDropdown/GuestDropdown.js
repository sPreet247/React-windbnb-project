import {} from 'react-icons/md';
import GuestDropdownSub from './GuestDropdownSub';
import { Wrapper } from './GuestDropdownElements';

function GuestDropdown() {
  return (
    <>
      <Wrapper>
        <GuestDropdownSub TitleH="Adults" TitleSubH="Age 13 or above" />
        <GuestDropdownSub TitleH="Children" TitleSubH="Age 2 - 12" />
      </Wrapper>
    </>
  );
}

export default GuestDropdown;
