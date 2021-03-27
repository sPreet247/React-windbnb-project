import styled from 'styled-components';

export const Descriptions = styled.div`
  display: flex;
  align-items: center;
`;

export const SuperHost = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 0.93rem;
  text-transform: uppercase;
  color: #4f4f4f;
  padding: 10px;
`;

export const TypeHost = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 0.87rem;
  line-height: 1.06rem;
  color: #828282;
`;

export const NumBeds = styled(TypeHost)``;

export const Ratings = styled(TypeHost)`
  color: #4f4f4f;
`;

export const Title = styled(TypeHost)`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: right;
  color: #333333;
`;
