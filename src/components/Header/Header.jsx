import PopUser from "../PopUser/PopUser";
import {
  SHeader,
  SHeaderBlock,
  SHeaderLogo,
  SHeaderLogoIMG,
  SHeaderNav,
  SHeaderBtnMainNew,
  SHeaderBtnMainNewA,
  SContainer,
} from "./Header.styled.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  function createTask(e) {
    e.preventDefault();
    navigate("/card/add");
  }
  return (
    <SHeader>
      <SContainer>
        <SHeaderBlock>
          <SHeaderLogo>
            <SHeaderLogoIMG
              src={isDark ? "images/logo_dark.png" : "images/logo.png"}
              alt="logo"
            />
          </SHeaderLogo>
          <SHeaderNav>
            <SHeaderBtnMainNew onClick={createTask} id="btnMainNew">
              <SHeaderBtnMainNewA to="/">
                Создать новую задачу
              </SHeaderBtnMainNewA>
            </SHeaderBtnMainNew>
            <PopUser />
          </SHeaderNav>
        </SHeaderBlock>
      </SContainer>
    </SHeader>
  );
};

export default Header;
