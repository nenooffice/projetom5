import styled, { css } from "styled-components";
import { StyledButtonProps } from "../../interfaces";

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, variant, size}) => css`
    width: 11rem;
    height: 3rem;
    border-radius: 8px;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textColor};
    box-shadow: 0px 8px 24px rgba(105, 234, 118, 0.2);
    cursor: pointer;
    font-family: ${theme.constants.bodyFontFamily};
    font-weight: 500;

    ${variant === "disable" &&
    css`
      background-color: ${theme.colors.baseBg2};
      color: ${theme.colors.primaryColor};
      border: 1px solid ${theme.colors.baseBg1};
      box-shadow: none;
    `}

    ${variant === "cancel" &&
    css`
      background-color: : ${theme.colors.basBg2};
      color: ${theme.colors.secondaryColor};
      border: 1px solid ${theme.colors.secondaryColor};
      box-shadow: none;
    `}

    ${size === "small" && 
    css`
      height: 2.125rem;
      padding: 0 0.75rem;
      width: 7.25rem;
    `}

    ${size === "large" && 
    css`
      width: 18.625rem;
    `}

    ${size === "x-large" && 
    css`
      width: 22.5rem;
    `}
  `}
`;