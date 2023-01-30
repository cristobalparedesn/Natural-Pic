import "../assets/css/galeria.css";
import { useState, useEffect } from "react";
import TarjetaFoto from "./TarjetaFoto";

export default function Galeria() {

  const [imagenes, setImagenes] = useState([])

  const getData = async () => {
    const res = await fetch("fotos.json")
    const data = await res.json();
    setImagenes(data.photos);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="galeria grid-columns-5 p-3">
      {imagenes.map((imagen) => {
        return <TarjetaFoto key={imagen.id} info={imagen} />;
      })}      
    </div>
  );
}
