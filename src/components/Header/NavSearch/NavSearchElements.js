import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  min-height: 3rem;

  display: flex;

  align-items: center;

  justify-content: center;
  cursor: pointer;
  box-shadow: 0 1px 6px rgb(0 0 0 / 10%);
  border-radius: 1rem;
  overflow: hidden;

  ${(props) =>
    props.expand &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      padding: 2rem 8rem;
      margin-bottom: 2rem;
      width: 100%;

      background: #ffffff;
    `}
`;

export const Input = styled.input`
  padding: 0 1rem;
  border: 0;
  border-right: 1px solid #f2f2f2;
  font-size: 0.8rem;
width: 8.5rem;
  flex-direction: column;
  color: #828282;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  

  ${(props) =>
    props.disabled &&
    css`
      background: #ffffff;
    `}

  ${(props) =>
    props.expandInput &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      font-size: 1rem;
      height: 100%;
      width: 50%;
      background: #ffffff;
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

      cursor: pointer;
    `}

  ${(props) =>
    props.radius &&
    css`
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    `}
`;

export const Button = styled.button`
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 1rem;
  background: #ffffff;

  ${(props) =>
    props.expandBtn &&
    css`
      color: #ffffff;

      background-color: #eb5757;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
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
