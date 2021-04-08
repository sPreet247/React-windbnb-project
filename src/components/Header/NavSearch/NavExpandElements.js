import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 0;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 83%;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Location = styled.div`
  width: 50%;
`;

export const AddGuest = styled.div`
  width: 50%;
`;

export const SearchEx = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eb5757;
  color: #ffffff;
`;

export const TopNavText = styled.div`
  font-size: 0.7rem;
  color: #333;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Font = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Muli;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.125rem;
  padding: 1rem;
  color: #bdbdbd;
  border-right: 1px solid #f2f2f2;
`;

export const SearchText = styled.div`
  color: #ffffff;
`;
