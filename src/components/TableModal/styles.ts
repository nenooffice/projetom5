import styled, { css } from "styled-components";

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    padding: 2rem;
    width: 25rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    color: ${theme.colors.textColor};
    border-radius: 10px;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  `}
`;
