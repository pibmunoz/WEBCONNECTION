import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);
  const total = cart.reduce((acc, el) => acc + el.price * el.stock, 0);
  return (
    <div className="cartTotal">
      <h3>Total a Pagar: ${total} </h3>
    </div>
  );
};

export default CartTotal;
