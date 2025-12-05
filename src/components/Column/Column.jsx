import Card from "../Card/Card.jsx";

const Column = ({ cardArray, columnName }) => {
  return (
    <>
      <div className="column__title">
        <p>{columnName}</p>
      </div>
      {cardArray.map((card) => (
        <Card
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
