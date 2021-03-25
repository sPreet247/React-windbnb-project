import { Descriptions } from './DescriptionElements';
import { AiFillStar } from 'react-icons/ai';

const Description = () => {
  return (
    <>
      <div>
        <Descriptions>
          <p>SUPER HOST</p>
          <p>Entire Apartment.</p>
          <p>2 Beds</p>
          <p>
            <AiFillStar />
            4.40
          </p>
        </Descriptions>
      </div>
    </>
  );
};

export default Description;
