import {
  SAuthBack,
  SAuthForm,
  SAuthTitle,
  SAuthInputBox,
  SAuthBuuton,
  SAuthTextBox,
  SAuthText,
  SAuthTextA,
  SAuthTextBoxS,
} from "./Auth.styled.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn, signUp } from "../../services/auth";
import AuthInput from "../../components/AuthInput/AuthInput.jsx";

const Auth = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние ошибок
  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние текста ошибки, чтобы показать её пользователю
  const [error, setError] = useState("");

  // функция валидации
  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isAuth && !formData.name.trim()) {
      newErrors.name = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError("Заполните все поля");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // функция, которая отслеживает в полях изменения
  // и меняет состояние компонента
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  // функция отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // если у нас форма не прошла валидацию, то дальше не продолжаем
      return;
    }
    try {
      // чтобы не писать две разных функции, выберем нужный запрос через
      // тернарный оператор
      const data = !isAuth
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        setIsAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <SAuthBack>
      <SAuthForm onSubmit={handleSubmit} id="form">
        <SAuthTitle>{isAuth ? "Регистрация" : "Вход"}</SAuthTitle>
        <SAuthInputBox>
          {isAuth && (
            <AuthInput
              error={errors.name}
              className="auth-input"
              type="text"
              name="name"
              id="formname"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <AuthInput
            error={errors.login}
            className="auth-input"
            type="text"
            name="login"
            id="formlogin"
            placeholder="Эл. почта"
            value={formData.login}
            onChange={handleChange}
          />
          <AuthInput
            error={errors.password}
            type="password"
            name="password"
            id="formpassword"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
          />
          <p>{error}</p>
        </SAuthInputBox>
        <SAuthBuuton>{isAuth ? "Зарегистрироваться" : "Войти"}</SAuthBuuton>
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
