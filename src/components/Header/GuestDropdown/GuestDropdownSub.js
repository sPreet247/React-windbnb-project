import {
  Button,
  BtnWrapper,
  GuestWrapper,
  Title,
  TitleSub,
  Count,
} from './GuestDropdownElements';
import { useState } from 'react';
function GuestDropdownSub({ TitleH, TitleSubH }) {
  const [count, SetCount] = useState(0);

  return (
    <>
      <GuestWrapper>
        <Title>{TitleH}</Title>
        <TitleSub text>{TitleSubH}</TitleSub>
        <BtnWrapper>
          <Button onClick={() => SetCount(count - 1)}>-</Button>
          <Count>0</Count>
          <Button onClick={() => SetCount(count + 1)}>+</Button>
        </BtnWrapper>
      </GuestWrapper>
    </>
  );
}

export default GuestDropdownSub;
