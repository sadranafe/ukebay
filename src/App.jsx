import { Route, Routes } from "react-router-dom";
import CartContext from "./context/cartContext";
import ProductsContext from "./context/productsContext";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import Cart from "./pages/cart";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <CartContext>
      <Layout>
        <ProductsContext>
          <Routes>
              <Route index element = {<Home/>}/>
              <Route path = "/products" element = {<Products/>}/>
              <Route path = "/products/*" element = {<ProductsDetails/>}/>
              <Route path = "/cart" element = {<Cart/>}/>
              <Route path = "/contact-us" element = {<ContactUs />}/>
              <Route path = "/login" element = {<Login/>}/>
              <Route path = "/customers" element = {<Customers/>}/>
              <Route path = "*" element = {<NotFound/>}/>
          </Routes>
        </ProductsContext>
      </Layout>
    </CartContext>
  );
};

export default App;