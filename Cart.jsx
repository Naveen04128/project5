import { useContext } from "react";
import { CartContext } from "./KFC/src/Context";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div>
      <h1>🛒 Cart Page</h1>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <button onClick={() => decreaseQty(item.id)}>-</button>
          {item.qty}
          <button onClick={() => increaseQty(item.id)}>+</button>
          <p>₹{item.price * item.qty}</p>
        </div>
      ))}

      <h2>Total: ₹{grandTotal}</h2>
    </div>
  );
}