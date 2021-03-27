import { Descriptions } from './DescriptionElements';
import { AiFillStar } from 'react-icons/ai';

const Description = () => {
  return (
    <>
      <div>
        <Descriptions>
          <p>SUPER HOST</p>
          <p>Entire house.</p>
          <p>6 Beds</p>
          <p>
            <AiFillStar />
            4.5
          </p>
        </Descriptions>
      </div>
    </>
  );
};

export default Description;
