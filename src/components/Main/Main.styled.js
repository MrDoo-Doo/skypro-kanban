import styled from "styled-components";

export const SMain = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.background.main};
  min-height: calc(100vh - 70px);
`;

export const SMainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    padding: 40px 0 64px;
  }
`;

export const SMainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const SMainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const SNotTask = styled.div`
  color: ${({ theme }) => theme.color.main};
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;
