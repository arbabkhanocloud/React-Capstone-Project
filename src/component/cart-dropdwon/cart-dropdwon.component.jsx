import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdwon = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage as="span">Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CheckOut?</Button>
    </CartDropDownContainer>
  );
};
export default CartDropdwon;
