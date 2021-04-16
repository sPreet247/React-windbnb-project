import {
  Button,
  Wrapper,
  BtnWrapper,
  GuestWrapper,
} from './GuestDropdownElements';
import {} from 'react-icons/md';
function GuestDropdown() {
  return (
    <>
      <Wrapper>
        <GuestWrapper>
          <h1>Adults</h1>
          <h4>Age 13 or above </h4>
          <BtnWrapper>
            <Button>-</Button>
            <h1>0</h1>
            <Button>+</Button>
          </BtnWrapper>
        </GuestWrapper>

        <GuestWrapper>
          <h1>Children</h1>
          <h4>Age 2 - 12</h4>
          <BtnWrapper>
            <Button>-</Button>
            <h1>0</h1>
            <Button>+</Button>
          </BtnWrapper>
        </GuestWrapper>
      </Wrapper>
    </>
  );
}

export default GuestDropdown;
