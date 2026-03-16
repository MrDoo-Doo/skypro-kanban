import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import {
  SPopExit,
  SPopExitContainer,
  SPopExitBlock,
  SPopExitTitle,
  SPopExitFormGroup,
  SPopExitY,
  SPopExitN,
} from "./PopExit.styled";

const PopExit = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("tokenAuth");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("pickedDate");
    localStorage.removeItem("DataTime");
    logout();
    navigate("/login");
  }
  function handleLogoutCancel(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <SPopExit>
      <SPopExitContainer>
        <SPopExitBlock>
          <SPopExitTitle>Выйти из аккаунта?</SPopExitTitle>
          <SPopExitFormGroup>
            <SPopExitY onClick={handleLogout}>Да, выйти</SPopExitY>
            <SPopExitN onClick={handleLogoutCancel}>Нет, остаться</SPopExitN>
          </SPopExitFormGroup>
        </SPopExitBlock>
      </SPopExitContainer>
    </SPopExit>
  );
};

export default PopExit;
