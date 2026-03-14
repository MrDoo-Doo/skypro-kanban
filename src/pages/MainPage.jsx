import "../App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { fetchTasks } from "../services/api";
import { useEffect, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../context/TaskProvider";

function MainPage() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const getTasks = useCallback(async () => {
    try {
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
    setToken(localStorage.getItem("tokenAuth"));
  }, []);

  useEffect(() => {
    if (token) {
      getTasks(token);
    }
  }, [getTasks, token]);

  return (
    <TasksProvider>
      <div className="wrapper">
        <Header />
        <Main
          error={error}
          tasks={tasks}
          loading={loading}
          getTasks={getTasks}
        />
        <Outlet context={{ getTasks }} />
      </div>
    </TasksProvider>
  );
}

export default MainPage;
