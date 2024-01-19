import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Layout/Loader";
import HighlightedProduct from "../components/HighlightedProduct";

const ProductsDetails = () => {
    const [product , setProduct] = useState([]);
    const index = useLocation().pathname.split('/').splice(2)
    
    useEffect(() => {
        const controller = new AbortController();
        
        axios.get('/products' , {signal : controller.signal})
        .then(res => setProduct(res[index - 1]))
        
        return () => {
            controller.abort();
        }
    },[])


    return (
        <div className = {`flex flex-wrap justify-center items-center p-10 ${product.length === 0 && 'h-[67vh]'}`}>
            {
                product.length === 0 ?
                <Loader/> : 
                <HighlightedProduct data = {product}/>
            }
        </div>
    );
};

export default ProductsDetails;