import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Location = styled.div``;

export const Font = styled.h4`
  font-family: Muli;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.125rem;
  padding: 1rem;
  color: #bdbdbd;
  border-right: 1px solid #f2f2f2;
`;
