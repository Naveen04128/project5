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
     { id: 1, name: "Potato Chilli Cheese", price: 120, image: img2 },
    { id: 2, name: "Cheesy Paneer Tikka", price: 180, image: img3 },
    { id: 3, name: "Cheesy Mexican", price: 150, image: img4 },
     { id: 1, name: "Potato Chilli Cheese", price: 120, image: img2 },
    { id: 2, name: "Cheesy Paneer Tikka", price: 180, image: img3 },
    { id: 3, name: "Cheesy Mexican", price: 150, image: img4 },
     { id: 1, name: "Potato Chilli Cheese", price: 120, image: img2 },
    { id: 2, name: "Cheesy Paneer Tikka", price: 180, image: img3 },
    { id: 3, name: "Cheesy Mexican", price: 150, image: img4 },
  ];

  // Format currency
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  // Add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);

      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });

    // Redirect to cart page
    navigate("/Card"); // ⚠️ make sure your route is "/cart"
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="az">  MENU LIST</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          
        }}
      >
        {products.map((product) => (
          <div className="ll"
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <img className="mm"
              src={product.image}
              width={150}
              height={120}
              alt={product.name}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />

            <h4>{product.name}</h4>
            <p>{formatCurrency(product.price)}</p>

            <button  className="pp" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}