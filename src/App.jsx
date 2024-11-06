import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./views/MainPage/";
import "./App.css";
import TestPage from "./views/TestPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<h1>About us</h1>} />
        <Route path="/test-page" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}
