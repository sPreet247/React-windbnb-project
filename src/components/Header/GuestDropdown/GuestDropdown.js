import {} from 'react-icons/md';
import {
  ButtonG,
  BtnWrapper,
  GuestWrapper,
  Title,
  TitleSub,
  Count,
} from '../GuestDropdown/GuestDropdownElements';

function GuestDropdown({ TitleH, TitleSubH, count, increment, decrement }) {
  return (
    <>
      <GuestWrapper>
        <Title>{TitleH}</Title>
        <TitleSub text>{TitleSubH}</TitleSub>
        <BtnWrapper>
          <ButtonG onClick={decrement} disabled={count <= 0}>
            -
          </ButtonG>
          <Count>{count}</Count>
          <ButtonG onClick={increment}>+</ButtonG>
        </BtnWrapper>
      </GuestWrapper>
    </>
  );
}

export default GuestDropdown;
