import { lazy , Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CartContext from "./context/cartContext";
import ProductsContext from "./context/productsContext";

import Layout from "./components/Layout/Layout";
import Loader from "./components/Layout/Loader";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import ProductsDetails from "./pages/ProductsDetails";
// import Basket from "./pages/basket";
// import ContactUs from "./pages/ContactUs";
// import Login from "./pages/Login";
// import Customers from "./pages/Customers";
// import NotFound from "./pages/NotFound";

const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const ProductsDetails = lazy(() => import('./pages/ProductsDetails'))
const Basket = lazy(() => import('./pages/basket'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const Login = lazy(() => import('./pages/Login'))
const Customers = lazy(() => import('./pages/Customers'))
const NotFound = lazy(() => import('./pages/NotFound'))


const App = () => {
  return (
    <CartContext>
      <Layout>
        <ProductsContext>
          <Suspense fallback = {<Loader/>}>
            <Routes>
                <Route index element = {<Home/>}/>
                <Route path = "/products" element = {<Products/>}/>
                <Route path = "/products/*" element = {<ProductsDetails/>}/>
                <Route path = "/cart" element = {<Basket/>}/>
                <Route path = "/contact-us" element = {<ContactUs />}/>
                <Route path = "/login" element = {<Login/>}/>
                <Route path = "/customers" element = {<Customers/>}/>
                <Route path = "*" element = {<NotFound/>}/>
            </Routes>
          </Suspense>
        </ProductsContext>
      </Layout>
    </CartContext>
  );
};

export default App;