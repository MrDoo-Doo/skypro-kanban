import "../App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { fetchTasks } from "../services/api";
import { useEffect, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";

// export function setToken(newToken){
//  let token = newToken;
//  return token;
// }

function MainPage() {
  console.log("002");
  let tokenA = localStorage.getItem("tokenAuth");

  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const getTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchTasks({
        token: tokenA,
        // token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
        // token: "ksdfsksdfjfsdjk",
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  useEffect(() => {
    getTasks();
    console.log("003");
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
