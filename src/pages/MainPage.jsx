import "../App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { fetchTasks } from "../services/api";
import { useEffect, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../context/TaskProvider";

function MainPage() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let tokenA = localStorage.getItem("tokenAuth");
    setToken(tokenA);
  }, []);

  const getTasks = useCallback(async () => {
    try {
      // setLoading(true);
      const data = await fetchTasks({
        token,
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getTasks();
    }
  }, [getTasks, token]);

  const hello = () => {
    console.log("hello");
    getTasks();
  };
  return (
    <TasksProvider>
      <div className="wrapper">
        <Header />
        <Main error={error} tasks={tasks} loading={loading} />
        <Outlet context={{ getTasks }} />
      </div>

      {/* !? */}
      {/* <script src="js/script.js"></script> */}
    </TasksProvider>
  );
}

export default MainPage;
