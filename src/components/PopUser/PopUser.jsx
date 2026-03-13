import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const PopUser = () => {
  const [modalWin, setModalWin] = useState(false);
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

  return (
    <>
      <a
        onClick={changeModal}
        // href="#user-set-target"
        className="header__user _hover02"
      >
        Ivan Ivanov
      </a>
      <div
        style={styleWin}
        className="header__pop-user-set pop-user-set"
        id="user-set-target"
      >
        <p className="pop-user-set__name">Ivan Ivanov</p>
        <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
        <div className="pop-user-set__theme">
          <p>Темная тема</p>
          <input
            type="checkbox"
            className="checkbox"
            name="checkbox"
            checked={isDark}
            onChange={toggleTheme}
          />
        </div>
        <button onClick={exit} type="button" className="_hover03">
          {/* <Link to="/exit">Выйти</Link> */}
          {/* <a href="#popExit">Выйти</a> */}
          Выйти
        </button>
      </div>
    </>
  );
};

export default PopUser;
