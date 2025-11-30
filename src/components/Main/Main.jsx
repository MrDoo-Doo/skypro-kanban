import Column from "../Column/Column.jsx";
import { cardList, columnList } from "../../data.js";

const filterCards = (statusName) => {
  let cardArr = cardList.filter((cardEl) => cardEl.status === statusName);
  return cardArr;
};

const Main = ({ loading }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {loading ? (
              <h1>Данные загружаются</h1>
            ) : (
              <>
                {columnList.map((column) => (
                  <div key={column.id} className="main__column">
                    <Column
                      cardArray={filterCards(column.name)}
                      columnName={column.name}
                    />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
