import styled from 'styled-components';

export const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  min-height: 1.813rem;
`;

export const SuperHost = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 0.93rem;
  text-transform: uppercase;
  color: #4f4f4f;
  border: 1px solid #4f4f4f;
  border-radius: 0.75rem;
  padding: 0.3rem 0.6rem;
  margin-right: 0.75rem;
`;

export const TypeHost = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 0.87rem;
  line-height: 1.06rem;
  color: #828282;

  margin: 0.3rem;
`;

export const Ratings = styled(TypeHost)`
  margin-left: 5rem;
  display: flex;
  align-items: center;

  color: #4f4f4f;
`;

export const Title = styled(TypeHost)`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #333333;
  margin-bottom: 1rem;
`;
