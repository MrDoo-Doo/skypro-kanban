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

  const onDropFun = (statusNew, index) => {
    const task = tasks.find((task) => String(task._id) === currentCard);
    console.log(status, index);
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
  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          <SMainContent>
            {loading ? (
              <h1>Данные загружаются</h1>
            ) : (
              <>
                {columnList.map((column) => (
                  <SMainColumn key={column.id}>
                    <Column
                      column={column}
                      cardArray={filterCards(tasks, column.name)}
                      columnName={column.name}
                      setShowBlock={setShowBlock}
                      setCurrentCard={setCurrentCard}
                    />
                    <SpaceForDrop
                      showBlock={showBlock}
                      onDropFun={() =>
                        onDropFun(
                          column.name,
                          filterCards(tasks, column.name).length + 1,
                        )
                      }
                    />
                  </SMainColumn>
                ))}
              </>
            )}
          </SMainContent>
        </SMainBlock>
        <p>{error}</p>
      </SContainer>
      <h1>#{currentCard}</h1>
    </SMain>
  );
};

export default Main;
