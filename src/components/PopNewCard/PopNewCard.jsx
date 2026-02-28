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
import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const PopNewCard = () => {
  const navigate = useNavigate();
  const { getTasks } = useOutletContext();
  const { addNewTask } = useContext(TaskContext);

  const [formData, setFormData] = useState({
    title: "",
    topic: "Research",
    status: "В работе",
    description: "",
    date: new Date().toISOString(),
  });

  const [activeCategory, setActiveCategory] = useState("Research");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
    try {
      const data = {
        title: formData.title,
        topic: formData.topic,
        status: formData.status,
        description: formData.description,
        date: formData.date,
      };
      await addNewTask(data);
      getTasks();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setFormData((prevState) => ({ ...prevState, topic: category }));
  };
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
            <p>{error}</p>
          </SModalTaskContent>
        </SModalTaskBlock>
      </SModalTaskContainer>
    </SModalTask>
  );
};

export default PopNewCard;
