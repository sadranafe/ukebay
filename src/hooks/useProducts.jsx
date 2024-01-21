import { useContext } from "react";
import { DUMMYproductsContext } from "../context/productsContext";


const UseProducts = () => {
    const products = useContext(DUMMYproductsContext)
    return products
};

export default UseProducts;