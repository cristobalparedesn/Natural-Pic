import { useFavoritosContext } from "../context/FavoritosContext";
import TarjetaFoto from "../components/TarjetaFoto";

export default function Favoritos() {
  const {favoritos} = useFavoritosContext()
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritos.map((item) => (
            <TarjetaFoto key={item.src} info={item} seleccionaFavoritos />
          ))
        }
      </div>
    </div>
  );
}
