import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./menu";

import { CartProvider } from "../Context";
import Cart from "../../../Cart";
import Home from "./Home";
import About from "./About";
import Store from "./Store";
import Signin from "./Signin"
import SignIn from "./Signin";


function App() {
  return (

    

    <>
    
    
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/Home" element={<Menu/>} />
           <Route path="/Menu" element={<Menu/>} />
           <Route path="/About" element={<Store/>} />
           <Route path="/Signin" element={<Signin/>} />

          <Route path="/cart" element={<Cart/> } />
        </Routes>
      
 <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/store">Store</a></li>
          <li><a href="/signin">Sign In</a></li>
        </ul>

      </BrowserRouter>
    </CartProvider>
    
    
    
    </>
  );
}

export default App;