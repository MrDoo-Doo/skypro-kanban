import {
  SModalTaskForm,
  SModalFormLabel,
  SModalFormInput,
  SModalFormArea,
  SModalFormCreatBtn,
  SModalCategoriesP,
  SModalCategoriesThemes,
  SModalCategoriesTheme,
  SModalCategoriesThemeP,
  SModalTaskWrap,
  SModalTaskClose,
  SModalTaskTitle,
  SModalTaskContent,
  SModalTaskBlock,
  SModalTaskContainer,
  SModalTask,
  SModalCategories,
  SModalFormBlock,
} from "./PopNewCard.styled";
import Calendar from "../Calendar/Calendar";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
// import { fetchTasks } from "../../services/api";
// console.log(localStorage.getItem("DataTime"));

const PopNewCard = () => {
  const navigate = useNavigate();
  const { getTasks } = useOutletContext();
  const { addNewTask } = useContext(TaskContext);
  // const [fullDate, setfullDate] = useState(new Date().toISOString());

  // const now = new Date();
  // hello();
  const [formData, setFormData] = useState({
    title: "",
    topic: "Research",
    status: "В работе",
    description: "",
    // date: fullDate,
    date: new Date().toISOString(),
  });

  const [activeCategory, setActiveCategory] = useState("Research");
  // const [errors, setErrors] = useState({
  //   name: "",
  //   description: "",
  // });

  const [error, setError] = useState("");

  // const validateForm = () => {
  //   const newErrors = { name: "", description: "" };
  //   let isValid = true;

  //   if (!formData.name.trim()) {
  //     newErrors.name = true;
  //     setError("Заполните все поля");
  //     isValid = false;
  //   }

  //   if (!formData.description.trim()) {
  //     newErrors.description = true;
  //     setError("Заполните все поля");
  //     isValid = false;
  //   }

  //   setErrors(newErrors);
  //   return isValid;
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // setErrors({ ...errors, [name]: false });
    // setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) {
      setFormData((prevState) => ({
        ...prevState,
        title: "Новая задача",
      }));
    }
    if (!formData.topic) {
      setFormData((prevState) => ({
        ...prevState,
        topic: "Research",
      }));
    }
    if (!formData.description) {
      setFormData((prevState) => ({
        ...prevState,
        description: "Описание",
      }));
    }
    // setFormData((prevState) => ({
    //   ...prevState,
    //   date: fullDate,
    // }));
    // console.log(fullDate);
    // if (!validateForm()) {
    //   return;
    // }
    try {
      const data = {
        title: formData.title,
        topic: formData.topic,
        status: formData.status,
        description: formData.description,
        date: formData.date,
      };
      await addNewTask(data);
      // if (data) {
      getTasks();
      navigate("/");
      // }
    } catch (err) {
      setError(err.message);
    }
  };
  // const navigate = useNavigate();
  // function close(e) {
  //   e.preventDefault();
  //   navigate("/");
  // }
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setFormData((prevState) => ({ ...prevState, topic: category }));
  };
  // const ccc = () => {
  //   console.log(fullDate);
  // };
  return (
    <SModalTask id="popNewCard">
      <SModalTaskContainer>
        <SModalTaskBlock onSubmit={handleSubmit} id="form">
          <SModalTaskContent>
            <SModalTaskTitle>Создание задачи</SModalTaskTitle>
            <SModalTaskClose to="/">&#10006;</SModalTaskClose>
            <SModalTaskWrap>
              <SModalTaskForm>
                <SModalFormBlock>
                  <SModalFormLabel htmlFor="formTitle">
                    Название задачи
                  </SModalFormLabel>
                  <SModalFormInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formData.title}
                    onChange={handleChange}
                    autoFocus
                  />
                </SModalFormBlock>
                <SModalFormBlock>
                  <SModalFormLabel htmlFor="textArea">
                    Описание задачи
                  </SModalFormLabel>
                  <SModalFormArea
                    type="text"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleChange}
                  ></SModalFormArea>
                </SModalFormBlock>
              </SModalTaskForm>
              <Calendar />
            </SModalTaskWrap>
            <SModalCategories>
              <SModalCategoriesP>Категория</SModalCategoriesP>
              <SModalCategoriesThemes>
                <SModalCategoriesTheme
                  name="topic"
                  value="Web Design"
                  className={
                    activeCategory === "Web Design" ? "_active-category" : ""
                  }
                  onClick={() => handleCategoryClick("Web Design")}
                >
                  <SModalCategoriesThemeP>Web Design</SModalCategoriesThemeP>
                </SModalCategoriesTheme>
                <SModalCategoriesTheme
                  name="topic"
                  value="Research"
                  className={
                    activeCategory === "Research" ? "_active-category" : ""
                  }
                  onClick={() => handleCategoryClick("Research")}
                >
                  <SModalCategoriesThemeP>Research</SModalCategoriesThemeP>
                </SModalCategoriesTheme>
                <SModalCategoriesTheme
                  name="topic"
                  value="Copywriting"
                  className={
                    activeCategory === "Copywriting" ? "_active-category" : ""
                  }
                  onClick={() => handleCategoryClick("Copywriting")}
                >
                  <SModalCategoriesThemeP>Copywriting</SModalCategoriesThemeP>
                </SModalCategoriesTheme>
              </SModalCategoriesThemes>
            </SModalCategories>
            <SModalFormCreatBtn className="_hover01" id="btnCreate">
              Создать задачу
            </SModalFormCreatBtn>
            {/* <h1 onClick={() => ccc()}>check</h1> */}
            <p>{error}</p>
          </SModalTaskContent>
        </SModalTaskBlock>
      </SModalTaskContainer>
    </SModalTask>
  );
};

export default PopNewCard;
