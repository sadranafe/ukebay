import { createContext, useEffect, useState } from "react";
import axios from "axios";

const DUMMYproductsContext = createContext();

const ProductsContext = ({ children }) => {
    const [DUMMYDATA , setDUMMYDATA] = useState([])

    useEffect(() => {
        const controller = new AbortController();

        axios.get('/products' , {signal : controller.signal})
        .then(res => setDUMMYDATA(res));

        return () => {
            controller.abort();
        }

    },[])


    return (
        <DUMMYproductsContext.Provider value = {DUMMYDATA}>
            {children}
        </DUMMYproductsContext.Provider>
    );
};

export { DUMMYproductsContext };
export default ProductsContext;