import Image from '../ImageComponent/Image';
import Description from '../Description/Description';
import { Container } from './CardElements';

const Card = () => {
  return (
    <>
      <Container>
        <Image />
        <Description />
      </Container>
    </>
  );
};

export default Card;
