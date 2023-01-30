import { createContext, useContext, useState } from "react";

export const FovoritosContext = createContext()

export default function FavoritosProvider({children}){

  const [favoritos, setFavoritos] = useState([])

  const adicionFavoritos = (alt) => {
    setFavoritos([...favoritos, {alt}])
  }

  const eliminarFavoritos = (id) => {
    setFavoritos(favoritos.filter((imagen) => imagen.id != id))
  }

  return (
    <FovoritosContext.Provider value={{favoritos, adicionFavoritos, eliminarFavoritos}}>
      {children}
    </FovoritosContext.Provider>
  )
}

// hook para utilizar
export const useFavoritosContext = () => useContext(FovoritosContext)