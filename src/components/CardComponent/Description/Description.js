import {
  Descriptions,
  SuperHost,
  TypeHost,
  Ratings,
  Title,
  Wrapper,
} from './DescriptionElements';
import { AiFillStar } from 'react-icons/ai';
import Image from '../ImageComponent/Image';

const Description = () => {
  return (
    <>
      <div>
        <Descriptions>
          <Image />
          <Wrapper>
            <SuperHost>SUPER HOST</SuperHost>
            <TypeHost>Entire house. 6 Beds</TypeHost>

            <Ratings>
              <AiFillStar style={{ color: 'red' }} />
              4.5
            </Ratings>
          </Wrapper>
          <Title>Arty interior in 1900 wooden house</Title>
        </Descriptions>
      </div>
    </>
  );
};

export default Description;
