import List from "../components/List";
import Add from "../components/Add";
import { Route, Routes } from "react-router-dom";

const MainRouter = () => {
  const PUBLIC = [
    {
      link: "/",
      element: <List />,
      id: 1,
    },
    {
      link: "/add",
      element: <Add />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRouter;
