import {
  SNotFoundBox,
  SNotFound,
  SNotFoundText,
  SNotFoundBtn,
} from "./NotPage.styled";
import { useNavigate } from "react-router-dom";

const NotPage = () => {
  const navigate = useNavigate();
  function toMain(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <SNotFoundBox>
      <SNotFound>404</SNotFound>
      <SNotFoundText>Страница не найдена</SNotFoundText>
      <SNotFoundBtn onClick={toMain}>Вернуться на главную</SNotFoundBtn>
    </SNotFoundBox>
  );
};

export default NotPage;
