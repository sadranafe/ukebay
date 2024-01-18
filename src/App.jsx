import { Route, Routes } from "react-router-dom";
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
    <>
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
    </>
  );
};

export default App;