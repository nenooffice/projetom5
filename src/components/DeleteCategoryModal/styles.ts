import styled, { css } from "styled-components";

export const DeleteModalContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 20vh;
    border-radius: 10px;
    background-color: ${theme.colors.baseBg2};
    padding: 3rem;
    text-align: center;
    color: ${theme.colors.textColor};
    gap: 4rem;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  `}
`;
