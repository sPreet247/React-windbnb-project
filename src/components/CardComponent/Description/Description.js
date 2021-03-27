import {
  Descriptions,
  SuperHost,
  TypeHost,
  NumBeds,
  Ratings,
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
        </Descriptions>
      </div>
    </>
  );
};

export default Description;
