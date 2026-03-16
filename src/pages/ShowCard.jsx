import PopBrowse from "../components/PopBrowse/PopBrowse";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const ShowCard = () => {
  const { id } = useParams();
  const { tasks, loading, error, deleteTask, getTasks } =
    useContext(TaskContext);
  const navigate = useNavigate();
  const task = tasks.find((task) => String(task._id) === id);
  if (loading) {
    return <div>Загрузка задачи...</div>;
  }
  if (error) {
    return <div>Ошибка загрузки: {error}</div>;
  }

  const minusTask = () => {
    deleteTask(task._id);
    getTasks();
    navigate("/");
  };

  return <PopBrowse task={task} minusTask={minusTask} />;
};

export default ShowCard;
