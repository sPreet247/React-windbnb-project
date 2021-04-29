import {
  Button,
  BtnWrapper,
  GuestWrapper,
  Title,
  TitleSub,
  Count,
} from './GuestDropdownElements';
import { useState } from 'react';
function GuestDropdownSub({ TitleH, TitleSubH, setGuests }) {
  const [count, SetCount] = useState(0);
  function increment() {
    SetCount(count + 1);
  }

  function decrement() {
    SetCount(count - 1);
  }
  return (
    <>
      <GuestWrapper>
        <Title>{TitleH}</Title>
        <TitleSub text>{TitleSubH}</TitleSub>
        <BtnWrapper>
          <Button onClick={decrement} disabled={count <= 0}>
            -
          </Button>
          <Count>{count}</Count>
          <Button onClick={increment}>+</Button>
        </BtnWrapper>
      </GuestWrapper>
    </>
  );
}

export default GuestDropdownSub;
