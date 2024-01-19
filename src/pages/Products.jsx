import { useState , useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import Loader from "../components/Layout/Loader";

const Products = () => {
    const [DUMMYDATA, setDUMMYDATA] = useState([]);

    useEffect(() => {
        axios.get('/products')
            .then(res => setDUMMYDATA(res));
    }, [])


    return (
        <>
            <div className = "my-7 flex flex-wrap justify-center items-start">
                <div className = "w-full flex flex-wrap justify-center items-center mb-3">
                    search  & sort
                </div>


                <div className = {`w-10/12 flex flex-wrap justify-center items-stretch ${DUMMYDATA.length === 0 && 'h-[67vh]'}`}>
                    {
                        DUMMYDATA.length === 0 
                        ?
                        <Loader/>
                        :
                        DUMMYDATA.map((item, index) =>
                            <Product key = {index} data = {item} trendingMode = {false} />
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Products;