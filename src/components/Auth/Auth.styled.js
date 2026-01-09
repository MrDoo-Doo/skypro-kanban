import styled from "styled-components";
import { Link } from "react-router-dom";

export const SAuthBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eaeef6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SAuthForm = styled.form`
  width: 368px;
  /* height: 329px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.7px solid #d4dbe5;
  border-radius: 10px;
  padding: 50px 60px;
  gap: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 67px -12px #00000021;
`;

export const SAuthTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -3%;
  text-align: center;
  color: #000;
`;

export const SAuthInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const SAuthInput = styled.input`
  width: 248px;
  height: 30px;
  border: 0.7px solid #94a6be66;
  border-radius: 8px;
  padding: 8px 10px;
`;

export const SAuthBuuton = styled.button`
  width: 248px;
  height: 30px;
  border: 0;
  border-radius: 4px;
  padding: 8px 10px;
  background: #565eef;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #fff;
`;

export const SAuthTextBox = styled.div`
  height: 42px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: #94a6be66;
`;

export const SAuthTextBoxS = styled.div`
  height: 42px;
  display: flex;
  gap: 6px;
  color: #94a6be66;
`;

export const SAuthText = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #94a6be66;
`;

export const SAuthTextA = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #94a6be66;
  text-decoration: underline;
`;
