import { Product, ProductsListProps } from "../../interfaces";
import ProductCard from "../ProductCard";
import * as Styled from "./styles";

const ProductsList = ({
  list,
  isFavoritesList,
  handleGetFavorites,
}: ProductsListProps) => {
  return (
    <Styled.ProductsListContainer>
      {list.map((element: Product) => (
        <ProductCard
          isFavoritesList={isFavoritesList}
          handleGetFavorites={handleGetFavorites}
          product={element}
          key={element.id}
          />
      ))}
    </Styled.ProductsListContainer>
  )
}
export default ProductsList;
