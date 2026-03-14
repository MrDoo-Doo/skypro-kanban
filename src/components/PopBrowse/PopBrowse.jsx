import {
  SPopBrowse,
  SPopBrowseContainer,
  SPopBrowseBlock,
  SPopBrowseContent,
  SPopBrowseTopBlock,
  SPopBrowseTitle,
  SCategoriesTheme,
  SCategoriesThemeP,
  SThemeTop,
  SThemeDown,
  SStatus,
  SStatusP,
  SStatusThemes,
  SStatusTheme,
  SStatusThemeP,
  SPopBrowseWrap,
  SPopBrowseForm,
  SPopFormBrowseBlock,
  SPopFormBrowseLabel,
  SPopFormBrowseArea,
  SPopBrowseBtnBrowse,
  SPopBrowseBtnEdit,
  SBtnBg,
  SBtnGroupBg,
  SBtnGroupBor,
  SBtnBgA,
  SBtnGroup,
} from "./PopBrowse.styled.js";
import { useEffect, useContext, useState } from "react";
import Calendar from "../Calendar/Calendar";
import { useNavigate, useOutletContext } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const localeDate = () => {
  const nowDate = new Date();
  const difTime = nowDate.getTimezoneOffset() * 60000;
  const actualDate = new Date(Date.now() - difTime).toISOString();
  return actualDate;
};

const PopBrowse = ({ task, minusTask }) => {
  const navigate = useNavigate();
  const { getTasks } = useOutletContext();
  const { updateTask } = useContext(TaskContext);

  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [selectedDate, setSelectedDate] = useState(task.date);
  const [activeStatus, setActiveStatus] = useState("");

  const [formData, setFormData] = useState({
    status: status,
    description: description,
    date: selectedDate,
  });

  useEffect(() => {
    if (task) {
      setTimeout(() => {
        setActiveStatus(task.status);
        setDescription(task.description || "Описание");
        setStatus(task.status || "Без статуса");
        setSelectedDate(task.date ? new Date(task.date) : null);
        setIsEditing(false);
      }, 0);
    }
  }, [task]);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.description) {
      setFormData((prevState) => ({
        ...prevState,
        description: "Описание",
      }));
    }
    let dataCreate = localeDate();
    if (localStorage.getItem("pickedDate")) {
      dataCreate = localStorage.getItem("pickedDate");
    }
    try {
      const data = {
        ...task,
        status: formData.status,
        description: formData.description,
        date: dataCreate,
      };
      await updateTask(data, task._id);
      setIsEditing(false);
      setError("");
      getTasks();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleStatusClick = (stat) => {
    setActiveStatus(stat);
    setFormData((prevState) => ({ ...prevState, status: stat }));
  };

  if (error) {
    console.log(error);
  }

  return (
    <SPopBrowse id={task}>
      <SPopBrowseContainer>
        <SPopBrowseBlock onSubmit={handleSubmit} id="form">
          <SPopBrowseContent>
            <SPopBrowseTopBlock>
              <SPopBrowseTitle>{task.title}</SPopBrowseTitle>
              <SThemeTop value={task.topic}>
                <SCategoriesThemeP value={task.topic}>
                  {task.topic}
                </SCategoriesThemeP>
              </SThemeTop>
            </SPopBrowseTopBlock>
            <SStatus>
              <SStatusP>Статус</SStatusP>
              <SStatusThemes>
                <SStatusTheme
                  name="status"
                  value={statuses[0]}
                  className={
                    activeStatus === statuses[0]
                      ? "_gray"
                      : isEditing === false
                        ? "_hide"
                        : ""
                  }
                  onClick={() => handleStatusClick(statuses[0])}
                >
                  <SStatusThemeP
                    className={activeStatus === statuses[0] ? "_gray" : ""}
                  >
                    {statuses[0]}
                  </SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme
                  name="status"
                  value={statuses[1]}
                  className={
                    activeStatus === statuses[1]
                      ? "_gray"
                      : isEditing === false
                        ? "_hide"
                        : ""
                  }
                  onClick={() => handleStatusClick(statuses[1])}
                >
                  <SStatusThemeP
                    className={activeStatus === statuses[1] ? "_gray" : ""}
                  >
                    {statuses[1]}
                  </SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme
                  name="status"
                  value={statuses[2]}
                  className={
                    activeStatus === statuses[2]
                      ? "_gray"
                      : isEditing === false
                        ? "_hide"
                        : ""
                  }
                  onClick={() => handleStatusClick(statuses[2])}
                >
                  <SStatusThemeP
                    className={activeStatus === statuses[2] ? "_gray" : ""}
                  >
                    {statuses[2]}
                  </SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme
                  name="status"
                  value={statuses[3]}
                  className={
                    activeStatus === statuses[3]
                      ? "_gray"
                      : isEditing === false
                        ? "_hide"
                        : ""
                  }
                  onClick={() => handleStatusClick(statuses[3])}
                >
                  <SStatusThemeP
                    className={activeStatus === statuses[3] ? "_gray" : ""}
                  >
                    {statuses[3]}
                  </SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme
                  name="status"
                  value={statuses[4]}
                  className={
                    activeStatus === statuses[4]
                      ? "_gray"
                      : isEditing === false
                        ? "_hide"
                        : ""
                  }
                  onClick={() => handleStatusClick(statuses[4])}
                >
                  <SStatusThemeP
                    className={activeStatus === statuses[4] ? "_gray" : ""}
                  >
                    {statuses[4]}
                  </SStatusThemeP>
                </SStatusTheme>
              </SStatusThemes>
            </SStatus>
            <SPopBrowseWrap>
              <SPopBrowseForm id="formBrowseCard" action="#">
                <SPopFormBrowseBlock>
                  <SPopFormBrowseLabel htmlFor="textArea01">
                    Описание задачи
                  </SPopFormBrowseLabel>
                  <SPopFormBrowseArea
                    type="text"
                    name="description"
                    id="textArea01"
                    readOnly={isEditing === false ? true : false}
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleChange}
                  ></SPopFormBrowseArea>
                </SPopFormBrowseBlock>
              </SPopBrowseForm>
              <Calendar able={isEditing} dataDate={selectedDate} />
            </SPopBrowseWrap>
            <SThemeDown className={"_hide"}>
              <SStatusP>Категория</SStatusP>
              <SCategoriesTheme value={task.topic}>
                <SCategoriesThemeP value={task.topic}>
                  {task.topic}
                </SCategoriesThemeP>
              </SCategoriesTheme>
            </SThemeDown>
            <SPopBrowseBtnBrowse className={isEditing === true ? "_hide" : ""}>
              <SBtnGroup>
                <SBtnGroupBor onClick={() => setIsEditing(true)}>
                  Редактировать задачу
                </SBtnGroupBor>
                <SBtnGroupBor onClick={minusTask}>Удалить задачу</SBtnGroupBor>
              </SBtnGroup>
              <SBtnBg>
                <SBtnBgA to={`/`}>Закрыть</SBtnBgA>
              </SBtnBg>
            </SPopBrowseBtnBrowse>
            <SPopBrowseBtnEdit className={isEditing === false ? "_hide" : ""}>
              <SBtnGroup>
                <SBtnGroupBg type="submit" onClick={handleSubmit}>
                  Сохранить
                </SBtnGroupBg>
                <SBtnGroupBor onClick={() => setIsEditing(false)}>
                  Отменить
                </SBtnGroupBor>
                <SBtnGroupBor id="btnDelete" onClick={minusTask}>
                  Удалить задачу
                </SBtnGroupBor>
              </SBtnGroup>
              <SBtnBg>
                <SBtnBgA to={`/`}>Закрыть</SBtnBgA>
              </SBtnBg>
            </SPopBrowseBtnEdit>
          </SPopBrowseContent>
        </SPopBrowseBlock>
      </SPopBrowseContainer>
    </SPopBrowse>
  );
};

export default PopBrowse;
