import { useContext, useState, useEffect, useCallback } from "react";
import { fetchTasks, postTask, editTask, apiDelete } from "../services/api";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";

export const TasksProvider = ({ children }) => {
  const [tasks, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  const loadTasks = useCallback(async () => {
    try {
      const data = await fetchTasks({
        token: user.token,
      });
      if (data) {
        setTask(data);
      }
    } catch (error) {
      setError(error.message);
      console.error("Ошибка загрузки задач", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user?.token) loadTasks();
  }, [user, loadTasks]);

  const addNewTask = async (taskData) => {
    try {
      const newTask = await postTask(user.token, taskData);
      setTask(newTask);
    } catch (error) {
      console.error("Ошибка добавления задачи", error);
    }
  };

  const updateTask = async (task, id) => {
    try {
      const newTasks = await editTask(user.token, id, task);
      setTask(newTasks);
    } catch (error) {
      console.error("Ошибка редактирования задачи", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await apiDelete(id, user.token);
      setTask((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const getTasks = async () => {
    try {
      const data = await fetchTasks({
        token: user.token,
      });
      if (data) setTask(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        setTask,
        loading,
        error,
        addNewTask,
        loadTasks,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
