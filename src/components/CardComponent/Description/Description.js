import {
  Descriptions,
  SuperHost,
  TypeHost,
  NumBeds,
  Ratings,
  Title,
} from './DescriptionElements';
import { AiFillStar } from 'react-icons/ai';

const Description = () => {
  return (
    <>
      <div>
        <Descriptions>
          <SuperHost>SUPER HOST</SuperHost>
          <TypeHost>Entire house.</TypeHost>
          <NumBeds>6 Beds</NumBeds>
          <Ratings>
            <AiFillStar />
            4.5
          </Ratings>

          <Title>Arty interior in 1900 wooden house</Title>
        </Descriptions>
      </div>
    </>
  );
};

export default Description;
