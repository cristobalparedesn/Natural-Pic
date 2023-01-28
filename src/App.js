import "./index.css";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Favoritos from "./pages/Favoritos"

export default function App() {
  const endpoint = "/fotos.json"
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Natural Pic</h1>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}