import Card from "../Card/Card.jsx";
import CardLoading from "../Card/CardLoading.jsx";
import { SColumnTitle, SColumnTitleP, SColumnBox } from "./Column.styled.js";

const formatDate = (date) => {
  const standartDate = new Date(date);
  const day = String(standartDate.getUTCDate()).padStart(2, "0");
  const month = String(standartDate.getUTCMonth() + 1).padStart(2, "0");
  const year = standartDate.getUTCFullYear();
  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
};

const Column = ({
  cardArray,
  columnName,
  setShowBlock,
  setCurrentCard,
  loading,
}) => {
  const skeletonCountByStatus = {
    "Без статуса": 2,
    "Нужно сделать": 4,
    "В работе": 3,
    Тестирование: 1,
    Готово: 1,
  };
  const skeletonCount = skeletonCountByStatus[columnName] || 2;

  return (
    <>
      <SColumnTitle>
        <SColumnTitleP>{columnName}</SColumnTitleP>
      </SColumnTitle>
      <SColumnBox>
        {loading
          ? Array.from({ length: skeletonCount }).map((_, i) => (
              <CardLoading key={i} cardId={i} />
            ))
          : cardArray.map((card) => (
              <Card
                key={card._id}
                cardStatus={card.status}
                cardTopic={card.topic}
                cardId={card._id}
                cardTitle={card.title}
                cardDate={formatDate(card.date)}
                setShowBlock={setShowBlock}
                setCurrentCard={setCurrentCard}
              />
            ))}
      </SColumnBox>
    </>
  );
};

export default Column;
