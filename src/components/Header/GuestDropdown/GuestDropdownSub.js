import {
  Button,
  BtnWrapper,
  GuestWrapper,
  Title,
  TitleSub,
  Count,
} from './GuestDropdownElements';

function GuestDropdownSub({ TitleH, TitleSubH, decrement, increment }) {
  return (
    <>
      <GuestWrapper>
        <Title>{TitleH}</Title>
        <TitleSub text>{TitleSubH}</TitleSub>
        <BtnWrapper>
          <Button onClick={() => decrement}>-</Button>
          <Count>0</Count>
          <Button onClick={() => increment}>+</Button>
        </BtnWrapper>
      </GuestWrapper>
    </>
  );
}

export default GuestDropdownSub;
