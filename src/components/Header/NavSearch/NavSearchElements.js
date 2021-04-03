import styled, { css } from 'styled-components';

export const Button = styled.button`
  
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  cursor: pointer;
  outline: none;

  ${(props) =>
    props.noBorder &&
    css`
      border-radius: 0;
    `}
    ${(props) =>
      props.noLeftBorder &&
      css`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      `}
    ${(props) =>
      props.noRightBorder &&
      css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      `}
`;

export const Font = styled.h4`
  font-family: Muli;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.125rem;

  color: #bdbdbd;
`;
