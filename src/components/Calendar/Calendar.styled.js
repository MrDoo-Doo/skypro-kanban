import styled from "styled-components";

export const SPopNewCardCalendar = styled.div`
  width: 100%;
`;

export const SCalendar = styled(SPopNewCardCalendar)`
  width: 182px;
  margin-bottom: 20px;
`;

export const SCalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: ${({ theme }) => theme.color.formTask};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const SCalendarBlock = styled.div`
  display: block;
`;

export const SCalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const SCalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const SCalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const SCalendarDayNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const SCalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  user-select: none;
`;

export const SCalendarCells = styled.div`
  width: 182px;
  display: flex;
  flex-wrap: wrap;
`;

export const SCalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  background: ${({ theme }) => theme.background.formTask};
  color: ${({ value, theme }) => (value ? theme.color.calendar : "#94a6be")};
  background: ${({ value, theme }) =>
    !value ? theme.background.calendar : "#94a6be"};
  cursor: ${({ inData }) => (inData ? "pointer" : "")};

  &:hover {
    background: ${({ inData, theme }) =>
      inData ? theme.background.cellHover : ""};
  }
`;

export const SNavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SNavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SNavActionSVG = styled.svg`
  fill: #94a6be;
`;

export const SCalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const SCalendarP = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
`;

export const SCalendarPSpan = styled.span`
  color: ${({ theme }) => theme.color.formTask};
`;
