import {
  SAuthBack,
  SAuthForm,
  SAuthTitle,
  SAuthInputBox,
  SAuthInput,
  SAuthBuuton,
  SAuthTextBox,
  SAuthText,
  SAuthTextA,
  SAuthTextBoxS,
} from "./Auth.styled.js";
import { useNavigate } from "react-router-dom";

const Auth = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };
  return (
    <SAuthBack>
      <SAuthForm>
        <SAuthTitle>{isAuth ? "Регистрация" : "Вход"}</SAuthTitle>
        <SAuthInputBox>
          {isAuth && (
            <SAuthInput
              className="auth-input"
              type="text"
              name="name"
              id="formname"
              placeholder="Имя"
            />
          )}
          <SAuthInput
            className="auth-input"
            type="text"
            name="login"
            id="formlogin"
            placeholder="Эл. почта"
          />
          <SAuthInput
            type="password"
            name="password"
            id="formpassword"
            placeholder="Пароль"
          />
        </SAuthInputBox>
        <SAuthBuuton onClick={handleLogin}>
          {isAuth ? "Зарегистрироваться" : "Войти"}
        </SAuthBuuton>
        {!isAuth && (
          <SAuthTextBox>
            <SAuthText>Нужно зарегистрироваться?</SAuthText>
            <SAuthTextA to="/register">Регистрируйтесь здесь</SAuthTextA>
          </SAuthTextBox>
        )}
        {isAuth && (
          <SAuthTextBoxS>
            <SAuthText>Есть аккаунт?</SAuthText>
            <SAuthTextA to="/login">Войдите здесь</SAuthTextA>
          </SAuthTextBoxS>
        )}
      </SAuthForm>
    </SAuthBack>
  );
};

export default Auth;
