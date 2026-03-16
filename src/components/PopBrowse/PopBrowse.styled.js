import styled from "styled-components";
import { Link } from "react-router-dom";

export const SPopBrowse = styled.div`
  width: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  top: 70px;

  &:target {
    display: block;
  }

  @media screen and (min-width: 660px) {
    top: 0px;
    height: 100%;
  }
`;

export const SPopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SPopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background.formTask};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.border.formTask};
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const SPopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const SPopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const SPopBrowseTitle = styled.h3`
  color: ${({ theme }) => theme.color.formTask};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const SCategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 1;
`;

export const SCategoriesThemeP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
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

export const SThemeTop = styled(SCategoriesTheme)`
  display: block;
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

export const SThemeDown = styled.div`
  display: block;
`;

export const SStatus = styled.div`
  margin-bottom: 11px;
`;

export const SStatusP = styled.p`
  color: ${({ theme }) => theme.color.formTask};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;

  @media screen and (max-width: 660px) {
    font-size: 18px;
  }
`;

export const SStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SStatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;
`;

export const SStatusThemeP = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  @media screen and (max-width: 660px) {
    font-size: 16px;
  }
`;

export const SPopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
`;

export const SPopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const SPopFormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SPopFormBrowseLabel = styled.label`
  color: ${({ theme }) => theme.color.formTask};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  @media screen and (max-width: 660px) {
    font-size: 18px;
  }
`;

export const SPopFormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  color: ${({ theme }) => theme.color.formTask};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  background: ${({ theme, readOnly }) =>
    readOnly ? theme.background.description : theme.background.formTask};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::-moz-placeholder {
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
    height: 37px;
  }
`;

export const SPopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SPopBrowseBtnEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SPopBrowseBtnBrowseB = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
`;

export const SPopBrowseBtnEditB = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
`;

export const SBtnBg = styled(SPopBrowseBtnEditB)`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 660px) {
    width: 100%;
    font-size: 20px;
    height: 38px;
  }
`;

export const SBtnGroupBg = styled(SBtnBg)`
  margin-right: 8px;
`;

export const SBtnBgA = styled(Link)`
  color: #ffffff;
`;

export const SBtnBor = styled(SPopBrowseBtnEditB)`
  border-radius: 4px;
  border: 0.7px solid ${({ theme }) => theme.button.formTask};
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.button.formTask};
  margin-right: 8px;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  @media screen and (max-width: 660px) {
    font-size: 20px;
    height: 38px;
  }
`;

export const SBtnGroupBor = styled(SBtnBor)`
  margin-right: 8px;
`;

export const SBtnBorA = styled.a`
  color: #565eef;
`;

export const SBtnGroup = styled.div`
  @media screen and (max-width: 660px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
