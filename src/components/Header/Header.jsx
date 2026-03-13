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
          <SHeaderLogo className="_show _light">
            <a href="" target="_self">
              <SHeaderLogoIMG
                src={isDark ? "images/logo_dark.png" : "images/logo.png"}
                alt="logo"
              />
            </a>
          </SHeaderLogo>
          <SHeaderLogo className="_dark">
            <a href="" target="_self">
              <SHeaderLogoIMG src="images/logo_dark.png" alt="logo" />
            </a>
          </SHeaderLogo>
          <SHeaderNav>
            <SHeaderBtnMainNew
              onClick={createTask}
              className="_hover01"
              id="btnMainNew"
            >
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
