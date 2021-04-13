import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Nav = styled.nav`
  ${(props) =>
    props.expand &&
    css`
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
    `}
`;

export const Input = styled.input`
  padding: 1rem;

  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${(props) =>
    props.expandBtn &&
    css`
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
    `}
`;

export const Button = styled.button`
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 1rem;
`;

export const Font = styled.h4`
  font-family: Muli;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.125rem;
  padding: 1rem;
  color: #bdbdbd;
  border-right: 1px solid #f2f2f2;

  ${(props) =>
    props.expandFont &&
    css`
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
    `}
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

export const SearchText = styled.div`
  color: #ffffff;
`;
