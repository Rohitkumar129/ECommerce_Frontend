import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/products";
import Cart from "./Pages/Cart/Cart";
import { useState,useEffect } from "react";
function App() {
  //console.log('cartItems', cartItems);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
