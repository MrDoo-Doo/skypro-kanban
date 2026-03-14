import styled from "styled-components";

export const SNotFoundBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background.not};
`;

export const SNotFound = styled.h1`
  font-size: 140px;
  color: ${({ theme }) => theme.color.not};
`;

export const SNotFoundText = styled.p`
  font-size: 32px;
  color: ${({ theme }) => theme.color.not};
`;

export const SNotFoundBtn = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-top: 20px;

  &:hover {
    background-color: #33399b;
  }
`;
