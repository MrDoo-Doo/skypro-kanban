import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import AddTask from "./pages/AddTask";
import ShowCard from "./pages/ShowCard";
import Logout from "./pages/Logout";
import Registration from "./pages/registration";
import Login from "./pages/Login";
import NotPage from "./pages/NotPage";
import PrivateRoute from "./components/PrivateRoute";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage loading={loading} />}>
          <Route path="/card/add" element={<AddTask />} />
          <Route path="/card/:id" element={<ShowCard />} />
          <Route path="/exit" element={<Logout setIsAuth={setIsAuth} />} />
        </Route>
      </Route>
      <Route
        path="/register"
        element={<Registration setIsAuth={setIsAuth} />}
      />
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      <Route path="*" element={<NotPage />} />
    </Routes>
  );
}

export default AppRoutes;
