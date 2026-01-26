import { useContext, useState, useEffect } from "react";
import { fetchTasks, postTask, editTask } from "../services/api";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";

export const TasksProvider = ({ children }) => {
  const [tasks, setTask] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        if (data) {
          setTask(data);
        }
      } catch (error) {
        setError(error.message);
        console.error("Ошибка загрузки задач", error);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, [user.token]);

  const addNewTask = async ({ task }) => {
    try {
      const newTask = await postTask({ token: user?.token, task });
      setTask(newTask);
    } catch (error) {
      console.error("Ошибка добавления задачи", error);
    }
  };

  const updateTask = async ({ task, id }) => {
    try {
      const newTasks = await editTask({ token: user?.token, id, task });
      setTask(newTasks);
    } catch (error) {
      console.error("Ошибка редактирования задачи", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, setTask, loading, error }}>
      {children}
    </TaskContext.Provider>
  );
};
