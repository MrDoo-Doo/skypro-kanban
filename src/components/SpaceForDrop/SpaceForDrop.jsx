import { FreeBox, FreeBorder } from "./SpaceForDrop.styled";
import { Link } from "react-router-dom";
import { useState } from "react";

const SpaceForDrop = ({ showBlock, onDropFun }) => {
  //   const [showBlock, setShowBlock] = useState(false);
  console.log(showBlock);
  return (
    <FreeBorder
      className={showBlock ? "" : "hide_block"}
      //   className={showBlock ? "green" : "red"}
    >
      <FreeBox
        // onDragStart={() => setShowBlock(true)}
        // onDragLeave={() => setShowBlock(false)}
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

// const [formData, setFormData] = useState({
//     status: status,
//     description: description,
//     date: selectedDate,
//   });

// const handleStatusClick = (stat) => {
//     setActiveStatus(stat);
//     setFormData((prevState) => ({ ...prevState, status: stat }));
//   };

// const handleSubmit = async () => {
//     try {
//       const data = {
//         ...task,
//         status: formData.status,
//         description: formData.description,
//       };
//       await updateTask(data, task._id);
//       setIsEditing(false);
//       setError("");
//       getTasks();
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };
