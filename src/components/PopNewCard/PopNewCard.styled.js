import styled from "styled-components";
import { Link } from "react-router-dom";

export const SModalTask = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  top: 70px;

  @media screen and (min-width: 660px) {
    top: 0px;
    height: 100%;
  }
`;

export const SModalTaskContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const SModalTaskBlock = styled.form`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background.formTask};
  max-width: 630px;
  padding: 40px 30px 48px;
  border-radius: 0;
  border: 0.7px solid ${({ theme }) => theme.border.formTask};
  position: relative;

  @media screen and (min-width: 660px) {
    border-radius: 10px;
    width: 100%;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const SModalTaskContent = styled.div`
  display: block;
  text-align: left;
`;

export const SModalTaskTitle = styled.h3`
  color: ${({ theme }) => theme.color.formTask};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    font-size: 24px;
  }
`;

export const SModalTaskClose = styled(Link)`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const SModalTaskWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
`;

export const SModalTaskForm = styled.div`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;

export const SModalFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SModalFormLabel = styled.label`
  color: ${({ theme }) => theme.color.formTask};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  @media screen and (max-width: 660px) {
    font-size: 18px;
  }
`;

export const SModalFormInput = styled.input`
  margin: 20px 0;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.color.formTask};

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 660px) {
    font-size: 18px;
  }
`;

export const SModalFormArea = styled.textarea`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.color.formTask};

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 660px) {
    font-size: 18px;
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`;

export const SModalFormCreatBtn = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 660px) {
    width: 100%;
    height: 36px;
    font-size: 18px;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const SModalCategories = styled.div`
  margin-bottom: 20px;
`;

export const SModalCategoriesP = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.color.formTask};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  @media screen and (max-width: 660px) {
    margin-left: 10px;
    font-size: 18px;
  }
`;

export const SModalCategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SModalCategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  cursor: pointer;
  ${({ value }) =>
    value === "Copywriting"
      ? "background-color: #E9D4FF"
      : value === "Research"
        ? "background-color: #B4FDD1"
        : value === "Web Design"
          ? "background-color: #FFE4C2"
          : "background-color: #FFFFFF"};
  ${({ value }) =>
    value === "Copywriting"
      ? "color: #9A48F1"
      : value === "Research"
        ? "color: #06B16E"
        : value === "Web Design"
          ? "color: #FF6D00"
          : "color: #FFFFFF"};
`;

export const SModalCategoriesThemeP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;
