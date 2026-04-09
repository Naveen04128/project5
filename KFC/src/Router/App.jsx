import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../App.css";

import { CartProvider } from "../Context";

import Menu from "./menu";
import Home from "./Home";
import About from "./About";
import Store from "./Store";
import Signin from "./Signin";

import img1 from "./Subway.jpg";
import img2 from "./download.png";
import Cart from "./Cart";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* NAVBAR */}
        <div
          style={{
            position: "fixed",
            zIndex: 1000,
            top: 0,
            width: "100%",
            backgroundColor: "white",
            padding: "10px",
          }}
        >
          <img src={img1} alt="logo" width={200} height={75} />

          <ul
            className="nav justify-content-end"
            style={{
              listStyle: "none",
              display: "flex",
              gap: "20px",
              marginLeft: "60%",
              marginTop: "-60px",
            }}
          >
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/store">Store</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign in</Link>
            </li>

            {/* CART ICON */}
            <Link to="/Card">
              <img src={img2} alt="cart" width={50} />
            </Link>
          </ul>
        </div>

        {/* ROUTES */}
        <div style={{ marginTop: "100px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/card" element={<Cart/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;