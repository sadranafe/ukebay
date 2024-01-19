import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const TrendingProducts = () => {
    const [DUMMYDATA , setDUMMYDATA] = useState([]);

    useEffect(() => {
        axios.get('/products')
        .then(res => setDUMMYDATA(res))
    },[])

    const filteredTrendingProducts = DUMMYDATA.filter(item => {
        return (item.rating.rate > 4.5)
    })

    return (
        <>
            <div className = "flex flex-wrap justify-center items-center my-14">
                <div>
                    <h1 className = 'capitalize text-2xl'>Trending Products</h1>
                </div>

                <div className = "w-full flex flex-wrap justify-center items-stretch p-5">
                    {
                        filteredTrendingProducts.map((item , index) => (
                            <Product key = {index} data = {item} trendingMode = {true}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default TrendingProducts;