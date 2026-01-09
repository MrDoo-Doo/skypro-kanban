import Calendar from "../Calendar/Calendar";
import { useNavigate } from "react-router-dom";

const PopExit = ({ setIsAuth }) => {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    setIsAuth(false);
    navigate("/login");
  }
  function handleLogoutCancel(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button
                onClick={handleLogout}
                className="pop-exit__exit-yes _hover01"
                id="exitYes"
              >
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </button>
              <button
                onClick={handleLogoutCancel}
                className="pop-exit__exit-no _hover03"
                id="exitNo"
              >
                {/* <a href="/">Нет, остаться</a>{" "} */}Нет, остаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopExit;
