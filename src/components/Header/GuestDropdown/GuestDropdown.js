import {} from 'react-icons/md';
import {
  ButtonG,
  BtnWrapper,
  GuestWrapper,
  Title,
  TitleSub,
  Count,
} from '../GuestDropdown/GuestDropdownElements';

function GuestDropdown({ count, setCount, adult, setAdult, child, setChild }) {
  function incrementAdult() {
    setAdult(adult + 1);
  }

  function decrementAdult() {
    setAdult(adult - 1);
  }

  function incrementChild() {
    setChild(child + 1);
  }

  function decrementChild() {
    setChild(child - 1);
  }
  return (
    <>
      <GuestWrapper>
        <Title>Adults</Title>
        <TitleSub text>Age 13 or above</TitleSub>
        <BtnWrapper>
          <ButtonG onClick={decrementAdult} disabled={adult <= 0}>
            -
          </ButtonG>
          <Count>{adult}</Count>
          <ButtonG onClick={incrementAdult}>+</ButtonG>
        </BtnWrapper>
      </GuestWrapper>

      <GuestWrapper>
        <Title>Children</Title>
        <TitleSub text>Age 2 - 12</TitleSub>
        <BtnWrapper>
          <ButtonG onClick={decrementChild} disabled={child <= 0}>
            -
          </ButtonG>
          <Count>{child}</Count>
          <ButtonG onClick={incrementChild}>+</ButtonG>
        </BtnWrapper>
      </GuestWrapper>
    </>
  );
}

export default GuestDropdown;
