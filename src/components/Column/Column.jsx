import Card from "../Card/Card.jsx";

const Column = ({ cardArray, columnName }) => {
  return (
    <>
      <div className="column__title">
        <p>{columnName}</p>
      </div>
      <Card cardArray={cardArray} />
    </>
  );
};

export default Column;
