import { SAuthInput, STextarea } from "../Auth/Auth.styled";

const AuthInput = ({
  tag = "input",
  id,
  name,
  placeholder = "",
  type = "text",
  error = false,
  onChange,
}) => {
  // Выбираем компонент в зависимости от тега, на случай, если нужна textarea
  const Component = tag === "textarea" ? STextarea : SAuthInput;

  return (
    <Component
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      $error={error}
      onChange={onChange}
    />
  );
};

export default AuthInput;
