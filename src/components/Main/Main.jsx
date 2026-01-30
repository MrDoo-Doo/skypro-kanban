import Column from "../Column/Column.jsx";
import { columnList } from "../../data.js";
import { SMain, SMainBlock, SMainContent, SMainColumn } from "./Main.styled.js";
import { SContainer } from "../Header/Header.styled.js";

const filterCards = (newCardArr, statusName) => {
  let cardArr = newCardArr.filter((cardEl) => cardEl.status === statusName);
  return cardArr;
};

const Main = ({ loading, error, tasks }) => {
  console.log("Рендеринг Column, tasks:", tasks);
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
                      cardArray={filterCards(tasks, column.name)}
                      columnName={column.name}
                    />
                  </SMainColumn>
                ))}
              </>
            )}
          </SMainContent>
        </SMainBlock>
        <p>{error}</p>
      </SContainer>
    </SMain>
  );
};

export default Main;
