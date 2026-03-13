import Column from "../Column/Column.jsx";
import SpaceForDrop from "../SpaceForDrop/SpaceForDrop.jsx";
import { columnList } from "../../data.js";
import { SMain, SMainBlock, SMainContent, SMainColumn } from "./Main.styled.js";
import { SContainer } from "../Header/Header.styled.js";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";

const filterCards = (newCardArr, statusName) => {
  let cardArr = newCardArr.filter((cardEl) => cardEl.status === statusName);
  return cardArr;
};

const Main = ({ loading, error, tasks, getTasks }) => {
  const navigate = useNavigate();
  const { updateTask } = useContext(TaskContext);
  const [currentCard, setCurrentCard] = useState(null);
  const [showBlock, setShowBlock] = useState(false);
  const [errorMain, setError] = useState("");

  const onDropFun = (statusNew) => {
    const task = tasks.find((task) => String(task._id) === currentCard);
    DragDrop(task, statusNew);
  };

  const DragDrop = async (task, statusNew) => {
    try {
      const data = {
        ...task,
        status: statusNew,
      };
      await updateTask(data, task._id);
      setError("");
      getTasks();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  if (errorMain) {
    console.log(errorMain);
  }
  if (error) {
    console.log(error);
  }

  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          <SMainContent>
            {columnList.map((column) => (
              <SMainColumn key={column.id}>
                <Column
                  column={column}
                  cardArray={filterCards(tasks, column.name)}
                  columnName={column.name}
                  setShowBlock={setShowBlock}
                  setCurrentCard={setCurrentCard}
                  loading={loading}
                />
                <SpaceForDrop
                  showBlock={showBlock}
                  onDropFun={() => onDropFun(column.name)}
                />
              </SMainColumn>
            ))}
          </SMainContent>
        </SMainBlock>
      </SContainer>
      {tasks.length == 0 && !loading ? <h1>Нет задач</h1> : <></>}
    </SMain>
  );
};

export default Main;
