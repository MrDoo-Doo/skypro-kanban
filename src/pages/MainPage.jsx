import "../App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { fetchTasks } from "../services/api";
import { useEffect, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";

function MainPage() {
  let tokenA = localStorage.getItem("tokenAuth");

  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const getTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchTasks({
        token: tokenA,
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <>
      <div className="wrapper">
        <Header />
        <Main error={error} tasks={tasks} loading={loading} />
        <Outlet />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default MainPage;
