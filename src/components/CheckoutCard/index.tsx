import * as Styled from "./styles";
import { useState } from "react";
import toast from "react-hot-toast";
import { TrashIcon } from "../../assets/icons";
import { CheckoutCardProps } from "../../interfaces";
import Input from "../Input";


const CheckoutCard = ({ product }: CheckoutCardProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [description, setDescription] = useState<string>("");

  return (
    <Styled.CheckoutCardContainer>
      <Styled.CheckoutCardHeader>
        <img alt={product.name} src={product.image} />
        <div>
          <h5 title={product.name}>{product.name}</h5>
          <p>R${product.price}</p>
        </div>
        <Styled.ProductQuantityInput
          type="number"
          min="1"
          max="100"
          value={quantity}
          onChange={(a) => setQuantity(Number(a.target.value))}
        />
        <span>R${(quantity * product.price).toFixed(2)}</span>
      </Styled.CheckoutCardHeader>
      <Styled.CheckoutCardFooter>
        <Input
          value={description}
          onChange={(a) => setDescription(a.target.value)}
          placeholder="Product Details"
        />
        <Styled.RemoveProductButton
          onClick={() => toast.error("Session under construction!")}
        >
          <TrashIcon />
        </Styled.RemoveProductButton>
      </Styled.CheckoutCardFooter>
    </Styled.CheckoutCardContainer>
  );
};

export default CheckoutCard;
