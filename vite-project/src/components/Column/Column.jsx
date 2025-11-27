import Card from "../Card/Card";
import { columnList } from "../../data.js";

const Column = () => {
  return (
    <>
      {columnList.map((column) => (
        <div className="main__column">
          <div className="column__title">
            <p>{column.name}</p>
          </div>
          <Card statusTask={column.name} />
        </div>
      ))}
    </>
  );
};

export default Column;
