import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Indexer from "../pages/indexer";
import List from "../pages/list";
import Register from "../pages/register";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/indexers" element={<List />} />
      <Route path="/indexers/:id" element={<Indexer />} />
    </Routes>
  );
};
export default PageRoutes;
