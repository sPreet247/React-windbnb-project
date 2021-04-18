import {
  Button,
  Wrapper,
  BtnWrapper,
  GuestWrapper,
  Title,
} from './GuestDropdownElements';
import {} from 'react-icons/md';
function GuestDropdown() {
  return (
    <>
      <Wrapper>
        <GuestWrapper>
          <Title>Adults</Title>
          <h4>Age 13 or above </h4>
          <BtnWrapper>
            <Button>-</Button>
            <h1>0</h1>
            <Button>+</Button>
          </BtnWrapper>
        </GuestWrapper>

        <GuestWrapper>
          <Title>Children</Title>
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
