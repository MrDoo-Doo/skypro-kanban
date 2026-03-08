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
  SError,
} from "./Auth.styled.js";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { signIn, signUp } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext.js";
import AuthInput from "../../components/AuthInput/AuthInput.jsx";

const Auth = ({ isAuth }) => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState("");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = !isAuth
        ? await signIn({
            login: formData.login,
            password: formData.password,
          })
        : await signUp(formData);

      if (data) {
        login(data);
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
          <SError>{error}</SError>
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
