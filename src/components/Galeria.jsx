import { useState, useEffect } from "react";
import "../assets/css/galeria.css";
import { useFavoritosContext } from "../context/FavoritosContext";
import Heart from "./Heart";

export default function Galeria() {

  const [imagenes, setImagenes] = useState([])

  const {adicionFavoritos} = useFavoritosContext()

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
      <ul>
        {imagenes.map((imagen) => {
          return (
            <div>
              <img src={imagen.src.medium} />
              <span onClick = {() => adicionFavoritos(imagen.alt)}><Heart/></span>
            </div> 
          )  
        })}
      </ul>
      
    </div>
  );
}
