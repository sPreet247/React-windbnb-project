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
import StayData from '../../../Data/Data.json';

const Description = () => {
  return (
    <>
      <div>
        <Descriptions>
          {StayData.map((data, index) => {
            return (
              <div key={index}>
                <Images src={data.photo} alt={data.type} />
                <Wrapper>
                  {data.superHost === true ? (
                    <SuperHost>SUPER HOST</SuperHost>
                  ) : null}

                  <TypeHost>
                    {data.type}. {data.beds} Beds
                  </TypeHost>

                  <Ratings>
                    <AiFillStar style={{ color: 'red' }} />
                    {data.rating}
                  </Ratings>
                </Wrapper>
                <Title>{data.title}</Title>
              </div>
            );
          })}
        </Descriptions>
      </div>
    </>
  );
};

export default Description;
