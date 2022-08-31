import { toast } from "react-hot-toast";
import { Favorite, ProductCardProps, User } from "../../interfaces";
import { api } from "../../services";
import Button from "../Button";
import * as Styled from "./styles";

const ProductCard = ({
  product,
  isFavoritesList,
  handleGetFavorites,
}: ProductCardProps) => {
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const user: User = JSON.parse(localStorage.getItem("user") || "");

  const handleSetFavorite = () => {
    const data = {
      userId: user.id,
      productName: product.name,
    };

    api
      .post("/favorites", data, headers)
      .then(() => {
        handleGetFavorites();
        toast.success("Product saved as Favorite!")
      })
      .catch(() => toast.error("Product already been saved!"));
  };
  
  const handleRemoveFavorite = async () => {
    const res = await api.get<Favorite[]>(
      `/favorite/user/${user?.id}`,
      headers
    );

    const favoriteId: string | undefined = res.data
    .filter((elem) => elem.productName === product.name)
    .find((elem) => elem.userId === user.id)?.id;

    api
      .delete(`/favorites/${favoriteId}`, headers)
      .then(() => {
        handleGetFavorites();
        toast.success("Product has been unfav!")
      })
      .catch(() => toast.error("Error"))
  };

  return (
    <Styled.CardContainer>
      <img alt={product.name} src={product.image} />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Button
        onClick={isFavoritesList ? handleRemoveFavorite: handleSetFavorite}
        text={
          isFavoritesList ? "Remove from Favorites" : "Add to Favorites"
        }
        size="small"
      />
    </Styled.CardContainer>
  );
};

export default ProductCard;
