import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CourseDetails from "../pages/CourseDetails";
import Checkout from "../pages/Checkout"; // ✅ ADD

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:slug" element={<CourseDetails />} />

        {/* ✅ Checkout */}
        <Route path="/checkout/:slug" element={<Checkout />} />
      </Route>
    </Routes>
  );
}