import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

import { Card } from "react-bootstrap";
import { useFavoritosContext } from "../context/FavoritosContext";

const TarjetaFoto = ({ info, seleccionaFavoritos }) => {
  const { favoritos, adicionFavoritos, eliminarFavoritos } = useFavoritosContext();

  return (
    <Card style={{ width: "14rem", border: 0 }}>
      <Card.Img variant="cover" src={info.src?.portrait} alt={info.alt} />
      <Card.ImgOverlay className="card-content">
        <Card.Text className="card-title fs-7 text-white">{info.alt}</Card.Text>
        {seleccionaFavoritos ? (
          <Button
            size="small"
            onClick={() => {
              eliminarFavoritos(info.id);
            }}
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Eliminar
          </Button>
        ) : (
          <Button
            disabled={favoritos.some((img) => img.id == info.id)}
            onClick={() => {
              adicionFavoritos(info);
            }}
            size="small"
            variant="contained"
            color="primary"
            sx={{ padding: 0.5 }}
            endIcon={<SendIcon />}
          >
            Agregar a Favoritos
          </Button>
        )}
      </Card.ImgOverlay>
    </Card>
  );
};

export default TarjetaFoto;