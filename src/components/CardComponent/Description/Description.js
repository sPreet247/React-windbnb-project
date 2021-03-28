import {
  Descriptions,
  SuperHost,
  TypeHost,
  Ratings,
  Title,
  Wrapper,
  Images,
} from './DescriptionElements';
import { AiFillStar } from 'react-icons/ai';
// import Data from '../Data/Data.json';

const Description = (props) => {
  return (
    <>
      <div>
        <Descriptions>
          <Images src={props.photo} alt={props.type} />
          <Wrapper>
            <SuperHost>SUPER HOST</SuperHost>
            <TypeHost>
              {props.type}. {props.beds} Beds
            </TypeHost>

            <Ratings>
              <AiFillStar style={{ color: 'red' }} />
              {props.ratings}
            </Ratings>
          </Wrapper>
          <Title>{props.title}</Title>
        </Descriptions>
      </div>
    </>
  );
};

export default Description;
