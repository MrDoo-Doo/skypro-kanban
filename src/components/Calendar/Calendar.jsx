import {
  SPopNewCardCalendar,
  SCalendarTitle,
  SCalendarBlock,
  SCalendarNav,
  SCalendarMonth,
  SCalendarContent,
  SCalendarDayNames,
  SCalendarDayName,
  SCalendarCells,
  SCalendarCell,
  SNavActions,
  SNavAction,
  SNavActionSVG,
  SCalendarPeriod,
  SCalendarP,
  SCalendarPSpan,
  SCalendar,
} from "./Calendar.styled";
import { useEffect, useState } from "react";
import React from "react";

const dateFormatUTC = (simplyDate) => {
  const parts = simplyDate.split(".").map(Number);
  const [day, month, year] = parts;
  const isoDate = new Date(Date.UTC(year, month - 1, day));
  return isoDate.toISOString();
};

const formatDate = (date) => {
  const standartDate = new Date(date);
  const day = String(standartDate.getUTCDate()).padStart(2, "0");
  const month = String(standartDate.getUTCMonth() + 1).padStart(2, "0");
  const year = standartDate.getUTCFullYear();
  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
};

const Calendar = ({ able, dataDate }) => {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const [arrCalendar, setArrCalendar] = useState([]);
  const [prevNum, setPrevNum] = useState(null);
  const [prevCountDay, setPrevCountDay] = useState(null);
  const [nextNum, setNextNum] = useState(null);
  const [nextCountDay, setNextCountDay] = useState(null);
  const [currenNum, setCurrenNum] = useState(null);
  const [currenWeekDay, setCurrenWeekDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);
  const [isCalendarInitialized, setIsCalendarInitialized] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentDate, setCurrentDate] = useState(dataDate);

  const currentCalendar = (status) => {
    if (status === "prev") {
      let prevYear = currentYear;
      let prevMonth = currentMonth - 1;
      if (prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
      }
      createArrCalendar(prevCountDay, prevNum);
      setCurrenWeekDay(createCalendar(prevCountDay, 1, prevNum, prevMonth));
      setCurrentMonth(prevMonth);
      setCurrentYear(prevYear);
      setPrevCountDay(getDate(prevYear, prevMonth - 1));
      setNextCountDay(getDate(prevYear, prevMonth + 1));
    }
    if (status === "now") {
      let countDays = getDate(currentYear, currentMonth);
      let currentDayWeek = createCalendar(
        countDays,
        currenNum,
        currenWeekDay,
        currentMonth,
      );
      createArrCalendar(countDays, currentDayWeek);
    }
    if (status === "next") {
      let nextYear = currentYear;
      let nextMonth = currentMonth + 1;
      if (nextMonth > 11) {
        nextMonth = 0;
        nextYear++;
      }
      createArrCalendar(nextCountDay, nextNum);
      setCurrenWeekDay(createCalendar(nextCountDay, 1, nextNum, nextMonth));
      setCurrentMonth(nextMonth);
      setCurrentYear(nextYear);
      setPrevCountDay(getDate(nextYear, nextMonth - 1));
      setNextCountDay(getDate(nextYear, nextMonth + 1));
    }
  };

  const getDate = (currentYear, currentMonth) => {
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    let isLeapYear = false;
    if (
      (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
      currentYear % 400 === 0
    ) {
      isLeapYear = true;
    } else {
      isLeapYear = false;
    }
    let countDays;
    switch (currentMonth) {
      case 1:
        countDays = isLeapYear ? 29 : 28;
        break;
      case 3:
      case 5:
      case 8:
      case 10:
        countDays = 30;
        break;
      default:
        countDays = 31;
    }
    return countDays;
  };

  const createCalendar = (countDays, currentDay, currentDayWeek, mm) => {
    let currentDayWeekSafe = currentDayWeek;
    for (let i = currentDay; i <= countDays; i++) {
      if (currentDayWeek == 7) {
        currentDayWeek = 1;
      } else {
        currentDayWeek++;
      }
    }
    setNextNum(currentDayWeek);

    currentDayWeek = currentDayWeekSafe;
    for (let i = currentDay; i > 1; i--) {
      if (currentDayWeek == 1) {
        currentDayWeek = 7;
      } else {
        currentDayWeek--;
      }
    }
    currentDayWeekSafe = currentDayWeek;

    currentDayWeek--;
    if (currentDayWeek == 0) currentDayWeek = 7;
    for (let i = getDate(currentYear, mm - 1); i > 1; i--) {
      if (currentDayWeek == 1) {
        currentDayWeek = 7;
      } else {
        currentDayWeek--;
      }
    }
    setPrevNum(currentDayWeek);
    return currentDayWeekSafe;
  };

  const createArrCalendar = (countDays, currentDayWeek) => {
    const newCalendar = [];
    let num = 1;
    let day = "";
    for (let j = 0; j < countDays + currentDayWeek - 1; j++) {
      if (j < currentDayWeek - 1) {
        day = "";
      } else {
        day = num;
        num++;
      }
      newCalendar.push(day);
    }
    setArrCalendar(newCalendar);
  };

  useEffect(() => {
    const NowDate = new Date();
    localStorage.setItem("DataTime", NowDate);
    setTimeout(() => {
      setCurrentYear(NowDate.getFullYear());
      setCurrentMonth(NowDate.getMonth());
      setCurrenNum(NowDate.getDate());
      setSelectedDate(NowDate.getDate());
      let currentDayWeek = NowDate.getDay();
      if (currentDayWeek == 0) {
        currentDayWeek = 7;
      }
      setCurrenWeekDay(currentDayWeek);
    }, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (
        !isCalendarInitialized &&
        currentYear !== null &&
        currentMonth !== null &&
        currenNum !== null &&
        currenWeekDay !== null
      ) {
        setPrevCountDay(getDate(currentYear, currentMonth - 1));
        setNextCountDay(getDate(currentYear, currentMonth + 1));
        setIsCalendarInitialized(true);
      }
    }, 0);
  }, [
    isCalendarInitialized,
    currentYear,
    currentMonth,
    currenNum,
    currenWeekDay,
  ]);

  useEffect(() => {
    setTimeout(() => {
      if (
        isCalendarInitialized &&
        prevCountDay !== null &&
        nextCountDay !== null
      ) {
        currentCalendar("now");
      }
    }, 0);
  }, [isCalendarInitialized]);

  const handleSelect = (value, index) => {
    if (value === "") return;
    setSelectedIndex(index);
    setSelectedDate(value);
    setCurrentDate(
      dateFormatUTC(`${value}.${currentMonth + 1}.${currentYear}`),
    );
  };
  useEffect(() => {
    if (selectedDate) {
      localStorage.setItem(
        "pickedDate",
        dateFormatUTC(`${selectedDate}.${currentMonth + 1}.${currentYear}`),
      );
    }
  }, [selectedDate]);

  return (
    <SCalendar>
      <SCalendarTitle>Даты</SCalendarTitle>
      <SCalendarBlock style={{ pointerEvents: able ? "painted" : "none" }}>
        <SCalendarNav>
          <SCalendarMonth>{`${months[currentMonth]} ${currentYear}`}</SCalendarMonth>
          <SNavActions>
            <SNavAction
              data-action="prev"
              onClick={() => currentCalendar("prev")}
            >
              <SNavActionSVG
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </SNavActionSVG>
            </SNavAction>
            <SNavAction
              data-action="next"
              onClick={() => currentCalendar("next")}
            >
              <SNavActionSVG
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </SNavActionSVG>
            </SNavAction>
          </SNavActions>
        </SCalendarNav>
        <SCalendarContent>
          <SCalendarDayNames>
            <SCalendarDayName>пн</SCalendarDayName>
            <SCalendarDayName>вт</SCalendarDayName>
            <SCalendarDayName>ср</SCalendarDayName>
            <SCalendarDayName>чт</SCalendarDayName>
            <SCalendarDayName>пт</SCalendarDayName>
            <SCalendarDayName>сб</SCalendarDayName>
            <SCalendarDayName>вс</SCalendarDayName>
          </SCalendarDayNames>
          <SCalendarCells>
            {arrCalendar.map((day, index) => (
              <SCalendarCell
                key={index}
                inData={day}
                onClick={() => handleSelect(day, index)}
                value={index === selectedIndex && day !== ""}
              >
                {day}
              </SCalendarCell>
            ))}
          </SCalendarCells>
        </SCalendarContent>
        <input
          type="hidden"
          id="datepick_value"
          value={formatDate(currentDate)}
        />
        <SCalendarPeriod>
          <SCalendarP className="date-end">
            Срок исполнения:{" "}
            <SCalendarPSpan className="date-control">
              {formatDate(currentDate)}
            </SCalendarPSpan>
          </SCalendarP>
        </SCalendarPeriod>
      </SCalendarBlock>
    </SCalendar>
  );
};

export default Calendar;
