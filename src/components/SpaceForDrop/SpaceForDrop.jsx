import { FreeBox, FreeBorder } from "./SpaceForDrop.styled";

const SpaceForDrop = ({ showBlock, onDropFun }) => {
  return (
    <FreeBorder className={showBlock ? "" : "hide_block"}>
      <FreeBox
        onDrop={() => {
          onDropFun();
        }}
        onDragOver={(e) => e.preventDefault()}
        className={showBlock ? "" : "hide_block"}
      ></FreeBox>
    </FreeBorder>
  );
};

export default SpaceForDrop;
