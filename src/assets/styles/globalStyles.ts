import styled, { css } from "styled-components";
import { StyledInputProps } from "../../interfaces";

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme, inputSize }) => css`
  all: unset;
  padding: 0 2rem;
  box-sizing: border-box;
  width: 20rem;
  min-height: : 5rem;
  background-color: ${theme.colors.baseBg1};
  border-radius: 8px;
  color: ${theme.colors.textColor};

  ${inputSize === "small" &&
  css`
    width: 12rem;
  `}

  ${inputSize === "large" &&
  css`
    width: 20rem;
    `}  
  `}
`;

export const MessageError = styled.p`
  ${({ theme }) => css`
    color: red;
    align-self: center;
    font-size: small;
    height: 3rem;
    padding: 0 3rem;
    text-align: center;
  `}
`;

export const ModalOverlay = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;