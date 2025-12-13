import Column from "../Column/Column.jsx";
import { cardList, columnList } from "../../data.js";
import { SMain, SMainBlock, SMainContent, SMainColumn } from "./Main.styled.js";
import { SContainer } from "../Header/Header.styled.js";
const filterCards = (statusName) => {
  let cardArr = cardList.filter((cardEl) => cardEl.status === statusName);
  return cardArr;
};

const Main = ({ loading }) => {
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
                      cardArray={filterCards(column.name)}
                      columnName={column.name}
                    />
                  </SMainColumn>
                ))}
              </>
            )}
          </SMainContent>
        </SMainBlock>
      </SContainer>
    </SMain>
  );
};

export default Main;
