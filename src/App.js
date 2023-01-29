import "./index.css";

import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Favoritos from "./pages/Favoritos"

export default function App() {
  const endpoint = "/fotos.json"
  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </div>
  );
}