import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: calc(50% - 11.5rem);
  top: 6rem;
  background: #fff;
  left: 17rem;
  border-radius: 1rem;
  box-shadow: 0 1px 6px rgb(0 0 0 / 10%);
  overflow: hidden;
`;

export const GuestWrapper = styled.div`
  padding: 1rem;

  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 1.125rem;
  color: #4f4f4f;
`;

export const Button = styled.button`
  margin: 0.5rem;
  width: 1.5rem;
  border: 1px solid #828282;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

export const BtnWrapper = styled.div`
  margin-top: 0.5rem;
  height: 1.5rem;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
`;
