import { useContext } from "react";
import { CartContext } from "../Context";

export default function Cart() {
  const { cart = [], setCart } = useContext(CartContext);

  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, qty: (item.qty || 1) - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * (item.qty || 1),
    0
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p style={styles.empty}>Your cart is empty 🛒</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={styles.card}>
              
              <img
                src={item.image}
                alt={item.name}
                style={styles.image}
              />

              <div style={styles.details}>
                <h3 style={styles.name}>{item.name}</h3>

                <div style={styles.qtyBox}>
                  <button
                    style={styles.qtyBtn}
                    onClick={() => decreaseQty(item.id)}
                  >
                    −
                  </button>

                  <span style={styles.qtyText}>
                    {item.qty || 1}
                  </span>

                  <button
                    style={styles.qtyBtn}
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>

                <p style={styles.price}>
                  {formatCurrency(item.price * (item.qty || 1))}
                </p>

                <button
                  style={styles.removeBtn}
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div style={styles.footer}>
            <h2>Total: {formatCurrency(grandTotal)}</h2>

            <button style={styles.clearBtn} onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },

  empty: {
    textAlign: "center",
    color: "gray",
    fontSize: "18px",
  },

  card: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    alignItems: "center",
  },

  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  details: {
    flex: 1,
  },

  name: {
    margin: "0 0 10px 0",
  },

  qtyBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },

  qtyBtn: {
    padding: "5px 12px",
    border: "none",
    background: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },

  qtyText: {
    margin: "0 10px",
    fontSize: "16px",
    fontWeight: "bold",
  },

  price: {
    fontWeight: "bold",
    marginBottom: "10px",
  },

  removeBtn: {
    padding: "6px 12px",
    border: "none",
    background: "#dc3545",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },

  footer: {
    marginTop: "20px",
    textAlign: "center",
  },

  clearBtn: {
    marginTop: "10px",
    padding: "10px 20px",
    border: "none",
    background: "#333",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
  },
};