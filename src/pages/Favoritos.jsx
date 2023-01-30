import { useFavoritosContext } from "../context/FavoritosContext";

export default function Favoritos() {
  const {favoritos, deleteFavorito} = useFavoritosContext()
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritos.map((item) => (
            <li key={item.id}>{item.alt}</li>
          ))
        }
      </div>
    </div>
  );
}
