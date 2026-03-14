import styled from "styled-components";

export const SHeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.color.userHead};

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${({ theme }) => theme.color.userHead};
    border-bottom: 1.9px solid ${({ theme }) => theme.color.userHead};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  &:hover {
    color: #33399b;
  }
`;

export const SHeaderPopUserSet = styled.div`
  display: none;
  position: absolute;
  top: 61px;
  right: 0;
  min-width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.border.user};
  background: ${({ theme }) => theme.background.user};
  box-shadow: 0px 10px 39px 0px ${({ theme }) => theme.shadow.user};
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const SPopUserName = styled.p`
  color: ${({ theme }) => theme.color.user};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const SUserMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const SPopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const SPopUserThemeP = styled.p`
  color: ${({ theme }) => theme.color.user};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const SPopUserThemeInput = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: ${({ theme }) => theme.background.checkbox};
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.button.checkbox};
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const SPopUserButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${({ theme }) => theme.button.user};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.button.user};
  cursor: pointer;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;
