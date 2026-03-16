import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddTask from "./pages/AddTask";
import ShowCard from "./pages/ShowCard";
import Logout from "./pages/Logout";
import Registration from "./pages/registration";
import Login from "./pages/Login";
import NotPage from "./pages/NotPage";
import PrivateRoute from "./components/PrivateRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/card/add" element={<AddTask />} />
          <Route path="/card/:id" element={<ShowCard />} />
          <Route path="/exit" element={<Logout />} />
        </Route>
      </Route>
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotPage />} />
    </Routes>
  );
}

export default AppRoutes;
