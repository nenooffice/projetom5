import * as Styled from "./styles";
import { EditIcon } from "../../assets/icons";
import { SettingsProductCardProps } from "../../interfaces";


const SettingsProductCard = ({ product }: SettingsProductCardProps) => {
  return (
    <Styled.SettingsProductCardContainer>
      <img alt={product.name} src={product.image} />
      <h3>{product.name}</h3>
      <p>R${product.price}</p>
      <Styled.SettingsProductCardButton>
        <EditIcon /> Edit Product
      </Styled.SettingsProductCardButton>
    </Styled.SettingsProductCardContainer>
  );
};

export default SettingsProductCard;
