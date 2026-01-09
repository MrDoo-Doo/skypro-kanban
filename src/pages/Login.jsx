import Auth from "../components/Auth/Auth";

const Login = ({ setIsAuth }) => {
  return <Auth setIsAuth={setIsAuth} isAuth={false} />;
};

export default Login;
