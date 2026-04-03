// Menu.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context";
import img2 from "./potato.jpg";
import img3 from "./paneer.jpg";
import img4 from "./cheesy.jpg";

export default function Menu() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Potato Chilli Cheese", price: 120, image: img2 },
    { id: 2, name: "Cheesy Paneer Tikka", price: 180, image: img3 },
    { id: 3, name: "Cheesy Mexican", price: 150, image: img4 },
  ];

  // Add to cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }

    // Redirect to cart page
    navigate("/cart");
  };

  return (
    <div style={{ display: "flex", padding: "20px", gap: "30px" }}>
      {/* LEFT SIDE - MENU */}
      <div style={{ flex: 1 }}>
        <h1>🍔 Menu</h1>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid gray",
              marginBottom: "15px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <img src={product.image} width={100} height={80} alt={product.name} />
            <div style={{ flex: 1 }}>
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
            </div>
            <button onClick={() => addToCart(product)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}