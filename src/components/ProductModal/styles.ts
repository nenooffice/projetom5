import styled, { css } from "styled-components";

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    padding: 2rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    color: ${theme.colors.textColor};
    border-radius: 10px;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    all: unset;
    padding: 0.75rem 1rem;
    box-sizing: border-box;
    width: 20rem;
    height: 4rem;
    background-color: ${theme.colors.baseBg1};
    border: 1px solid ${theme.colors.baseLine};
    border-radius: 10px;
    color: ${theme.colors.textColor};
  `}
`;
