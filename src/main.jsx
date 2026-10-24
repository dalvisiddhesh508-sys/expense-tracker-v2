import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import Counter from "./Couter.jsx";
import AnimalList from "./AnimalList.jsx";
import Title from "./components/common/title/Title.jsx";
import ProductList from "./components/module/ProductList/ProductList.jsx";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/module/ProductDetails/ProductDetails.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>|{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/counter">Counter</Link> |{" "}
      <Link to="/animal-list">Animal List</Link> |{" "}
    </nav>
    <Routes>
      <Route path="/" element={<h1>Root</h1>}></Route>
      <Route path="/counter" element={<Counter></Counter>}></Route>
      <Route path="/animal-list" element={<AnimalList/>}></Route>
      <Route
        path="/products"
        element={
          <>
            <ProductList></ProductList>
          </>
        }
      >
      
      </Route>
      <Route path="/product/:id/:sku" element={<ProductDetails></ProductDetails>}></Route>
    </Routes>
  </BrowserRouter>,
);
