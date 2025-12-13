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

const Header = () => {
  return (
    <SHeader>
      <SContainer>
        <SHeaderBlock>
          <SHeaderLogo className="_show _light">
            <a href="" target="_self">
              <SHeaderLogoIMG src="images/logo.png" alt="logo" />
            </a>
          </SHeaderLogo>
          <SHeaderLogo className="_dark">
            <a href="" target="_self">
              <SHeaderLogoIMG src="images/logo_dark.png" alt="logo" />
            </a>
          </SHeaderLogo>
          <SHeaderNav>
            <SHeaderBtnMainNew className="_hover01" id="btnMainNew">
              <SHeaderBtnMainNewA href="#popNewCard">
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
