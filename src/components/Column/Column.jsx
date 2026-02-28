import Card from "../Card/Card.jsx";
// import SpaceForDrop from "../SpaceForDrop/SpaceForDrop.jsx";
import { SColumnTitle, SColumnTitleP } from "./Column.styled.js";
import { useEffect, useState } from "react";

const Column = ({ cardArray, columnName, setShowBlock, setCurrentCard }) => {
  // const [currentCard, setCurrentCard] = useState(null);
  // const [showBlock, setShowBlock] = useState(false);

  // const dragOverHandler = (e) => {
  //   e.preventDefault();
  //   if (e.target.className == "cart") {
  //     e.target.style.boxShadow = "0 4px 3px gray";
  //   }
  // };
  // const dragLeaveHandler = (e) => {
  //   e.target.style.boxShadow = "none";
  // };
  // const dragStartHandler = (e, column, card) => {
  //   setCurrentColumn(column);
  //   setCurrentCard(card);
  // };
  // const dragEndHandler = (e) => {
  //   e.target.style.boxShadow = "none";
  // };
  // const dropHandler = (e, column, card) => {
  //   e.preventDefault();
  //   const currentIndex = currentColumn.cardArray.indexOf(currentCard);
  //   currentColumn.cardArray.splice(currentIndex, 1);
  //   const dropIndex = column.cardArray.indexOf(card);
  //   column.cardArray.splice(dropIndex + 1, 0, currentCard);
  //   setCurrentColumn(
  //     column.map((c) => {
  //       if (c.id === column.id) {
  //         return column;
  //       }
  //       if (c.id === currentColumn.id) {
  //         return currentColumn;
  //       }
  //       return c;
  //     }),
  //   );
  // };
  return (
    <>
      <SColumnTitle>
        <SColumnTitleP>{columnName}</SColumnTitleP>
      </SColumnTitle>
      <div>
        {cardArray.map((card) => (
          <Card
            key={card._id}
            cardStatus={card.status}
            cardTopic={card.topic}
            cardId={card._id}
            cardTitle={card.title}
            cardDate={card.date}
            // onDragOver={(e) => dragOverHandler(e)}
            // onDragLeave={(e) => dragLeaveHandler(e)}
            // onDragStart={(e) => dragStartHandler(e, column, card)}
            // onDragEnd={(e) => dragEndHandler(e)}
            // onDrop={(e) => dropHandler(e, column, card)}
            // draggable={true}
            setShowBlock={setShowBlock}
            setCurrentCard={setCurrentCard}
          />
        ))}
        {/* <SpaceForDrop showBlock={showBlock} /> */}
        {/* <h1>#{currentCard}</h1> */}
      </div>
    </>
  );
};

export default Column;
