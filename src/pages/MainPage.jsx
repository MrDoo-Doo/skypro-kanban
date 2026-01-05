import "../App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import AddTask from "./AddTask";
import ShowCard from "./ShowCard";
import { Outlet } from "react-router-dom";

function MainPage({ loading }) {
  return (
    <>
      <div className="wrapper">
        {/* <AddTask /> */}
        {/* <ShowCard /> */}

        <Header />

        <Main loading={loading} />

        <Outlet />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default MainPage;
