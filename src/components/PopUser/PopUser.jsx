import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import {
  SHeaderUser,
  SHeaderPopUserSet,
  SPopUserName,
  SUserMail,
  SPopUserTheme,
  SPopUserThemeP,
  SPopUserThemeInput,
  SPopUserButton,
} from "./PopUser.styled";

const PopUser = () => {
  const [modalWin, setModalWin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const changeModal = () => {
    if (modalWin === true) {
      setModalWin(false);
    } else {
      setModalWin(true);
    }
  };
  const styleWin = {
    display: modalWin ? "block" : "none",
  };

  const navigate = useNavigate();

  function exit(e) {
    e.preventDefault();
    navigate("/exit");
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    setTimeout(() => {
      setUserName(userData.name);
      setUserEmail(userData.login);
    }, 0);
  });

  return (
    <>
      <SHeaderUser onClick={changeModal}>{userName}</SHeaderUser>
      <SHeaderPopUserSet style={styleWin} id="user-set-target">
        <SPopUserName>{userName}</SPopUserName>
        <SUserMail>{userEmail}</SUserMail>
        <SPopUserTheme>
          <SPopUserThemeP>Тёмная тема</SPopUserThemeP>
          <SPopUserThemeInput checked={isDark} onChange={toggleTheme} />
        </SPopUserTheme>
        <SPopUserButton onClick={exit} type="button">
          Выйти
        </SPopUserButton>
      </SHeaderPopUserSet>
    </>
  );
};

export default PopUser;
