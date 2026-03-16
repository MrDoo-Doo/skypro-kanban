import { FreeBox, FreeBorder } from "./SpaceForDrop.styled";

const SpaceForDrop = ({ showBlock, onDropFun }) => {
  return (
    <FreeBorder className={showBlock ? "" : "_hide"}>
      <FreeBox
        onDrop={() => {
          onDropFun();
        }}
        onDragOver={(e) => e.preventDefault()}
        className={showBlock ? "" : "_hide"}
      ></FreeBox>
    </FreeBorder>
  );
};

export default SpaceForDrop;
