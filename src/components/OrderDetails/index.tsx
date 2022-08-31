import toast from "react-hot-toast";
import Button from "../Button";
import CheckoutCard from "../CheckoutCard";
import * as Styled from "./styles";
import { mockedProducts } from "../../mocks";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <h2>Order #07</h2>
        <div>
          <Button text="Stay on site" onClick={() => {}} size="small" />
          <Button
            text="Roadtrip"
            onClick={() => {}}
            size="small"
            variant="disable"
          />
          <Button
            text="Delivery"
            onClick={() => {}}
            size="small"
            variant="disable"
          />
        </div>
      </Styled.OrderDetailsHeader>
      <Styled.CheckoutDetailsContainer>
        <Styled.CheckoutDetailsHeader>
          <div>
            <h3>Item</h3>
            <h3>Quantity</h3>
          </div>
          <h3>Price</h3>
        </Styled.CheckoutDetailsHeader>
        <Styled.CheckoutCardsContainer>
          <CheckoutCard product={mockedProducts[4]} />
          <CheckoutCard product={mockedProducts[8]} />
        </Styled.CheckoutCardsContainer>
      </Styled.CheckoutDetailsContainer>
      <Styled.OrderDetailsFooter>
        <div>
          <p>Discount</p>
          <h3>$0.00</h3>
        </div>
        <div>
          <p>Sub total</p>
          <h3>R$0.00</h3>
        </div>
        <Button
          text="Payment"
          onClick={() => toast.error("On dev!")}
          size="x-large"
        />
      </Styled.OrderDetailsFooter>
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
