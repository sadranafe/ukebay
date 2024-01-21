import { useState , useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { filterProducts } from "../helper/helper";

import Loader from "../components/Layout/Loader";
import Product from "../components/Product";
import Search from "../components/Search";
import Sorts from "../components/Sorts";
import Filters from "../components/Filters";

const Products = () => {
    const [DUMMYDATA, setDUMMYDATA] = useState([]);
    const [searchParams , setSearchParams] = useSearchParams()
    const [filteredProducts , setFilteredProducts] = useState([]);
    const [query , setQuery] = useState({});

    useEffect(() => {
        axios.get('/products')
            .then(res => setDUMMYDATA(res));
    },[])

    useEffect(() => {

        setFilteredProducts(DUMMYDATA)
    },[DUMMYDATA])

    useEffect(() => {
        setSearchParams(query)

        let finalProducts = filterProducts(DUMMYDATA , query.category)
        setFilteredProducts(finalProducts);
    },[query])


    return (
        <>
            <div className = "my-7 flex flex-wrap justify-center items-start">
                <div className = "w-full flex flex-wrap justify-center items-center mb-3">
                    <Search />

                    <Sorts/>
                </div>


                <div className = {`w-10/12 flex flex-wrap justify-center items-stretch ${DUMMYDATA.length === 0 && 'h-[67vh]'}`}>
                    {
                        DUMMYDATA.length === 0 
                        ?
                        <Loader/>
                        :
                        filteredProducts.map((item, index) =>
                            <Product key = {index} data = {item} trendingMode = {false} />
                        )
                    }
                </div>

                <Filters query = {query} onQuery = {setQuery} />
            </div>
        </>
    );
};

export default Products;