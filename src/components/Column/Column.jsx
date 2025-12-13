import Card from "../Card/Card.jsx";
import { SColumnTitle, SColumnTitleP } from "./Column.styled.js";

const Column = ({ cardArray, columnName }) => {
  return (
    <>
      <SColumnTitle>
        <SColumnTitleP>{columnName}</SColumnTitleP>
      </SColumnTitle>
      {cardArray.map((card) => (
        <Card
          key={card.id}
          cardTopic={card.topic}
          cardId={card.id}
          cardTitle={card.title}
          cardDate={card.date}
        />
      ))}
    </>
  );
};

export default Column;
