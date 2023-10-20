import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="contaier">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
