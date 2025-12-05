import { useState } from "react";

const PopUser = () => {
  const [modalWin, setModalWin] = useState(false);

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
          <input type="checkbox" className="checkbox" name="checkbox" />
        </div>
        <button type="button" className="_hover03">
          <a href="#popExit">Выйти</a>
        </button>
      </div>
    </>
  );
};

export default PopUser;
