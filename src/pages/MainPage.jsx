import "../App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../context/TaskProvider";

function MainPage() {
  return (
    <TasksProvider>
      <div className="wrapper">
        <Header />
        <Main />
        <Outlet />
      </div>
    </TasksProvider>
  );
}

export default MainPage;
