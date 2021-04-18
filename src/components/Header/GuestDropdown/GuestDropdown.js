import {
  Button,
  Wrapper,
  BtnWrapper,
  GuestWrapper,
  Title,
  Count,
} from './GuestDropdownElements';
import { useState } from 'react';
import {} from 'react-icons/md';
function GuestDropdown() {
  const [count, SetCount] = useState(null);
  return (
    <>
      <Wrapper>
        <GuestWrapper>
          <Title>Adults</Title>
          <Title text>Age 13 or above </Title>
          <BtnWrapper>
            <Button>-</Button>
            <Count>0</Count>
            <Button>+</Button>
          </BtnWrapper>
        </GuestWrapper>

        <GuestWrapper>
          <Title>Children</Title>
          <Title text>Age 2 - 12</Title>
          <BtnWrapper>
            <Button>-</Button>
            <Count>0</Count>
            <Button>+</Button>
          </BtnWrapper>
        </GuestWrapper>
      </Wrapper>
    </>
  );
}

export default GuestDropdown;
