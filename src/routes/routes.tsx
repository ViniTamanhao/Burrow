import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Library from "../pages/Library";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />} />
    </Routes>
  );
};

export default AppRoutes;
