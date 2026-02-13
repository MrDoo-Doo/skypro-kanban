import Card from "../Card/Card.jsx";
import { SColumnTitle, SColumnTitleP } from "./Column.styled.js";

const Column = ({ cardArray, columnName }) => {
  return (
    <>
      <SColumnTitle>
        <SColumnTitleP>{columnName}</SColumnTitleP>
      </SColumnTitle>
      <div>
        {cardArray.map((card) => (
          <Card
            key={card._id}
            cardTopic={card.topic}
            cardId={card._id}
            cardTitle={card.title}
            cardDate={card.date}
          />
        ))}
      </div>
    </>
  );
};

export default Column;
