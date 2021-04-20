import {} from 'react-icons/md';
import GuestDropdownSub from './GuestDropdownSub';
import { Wrapper } from './GuestDropdownElements';
import { useState } from 'react';
function GuestDropdown() {
  const [count, SetCount] = useState(0);
  function increment() {
    SetCount(count + 1);
  }

  function decrement() {
    SetCount(count - 1);
  }
  return (
    <>
      <Wrapper>
        <GuestDropdownSub
          TitleH="Adults"
          TitleSubH="Age 13 or above"
          decrement={decrement}
        />
        {/* <GuestDropdownSub TitleH="Children" TitleSubH="Age 2 - 12" /> */}
      </Wrapper>
    </>
  );
}

export default GuestDropdown;
