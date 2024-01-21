import { useState , useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import UseProducts from "../hooks/useProducts";
import { filterProducts, getInitialQuery, searchProducts, sortProducts } from "../helper/helper";

import Loader from "../components/Layout/Loader";
import Product from "../components/Product";
import Search from "../components/Search";
import Sorts from "../components/Sorts";
import Filters from "../components/Filters";

const Products = () => {
    const DUMMYDATA = UseProducts();
    const [searchParams , setSearchParams] = useSearchParams()
    const [filteredProducts , setFilteredProducts] = useState([]);
    const [query , setQuery] = useState({});

    useEffect(() => {
        setFilteredProducts(DUMMYDATA)
        
        setQuery(getInitialQuery(searchParams))
    },[DUMMYDATA])

    useEffect(() => {
        setSearchParams(query)

        let finalProducts = sortProducts(DUMMYDATA , query.sort)
        finalProducts = searchProducts(DUMMYDATA , query.search)
        finalProducts = filterProducts(finalProducts , query.category)

        setFilteredProducts(finalProducts);
    },[query])


    return (
        <>
            <div className = "my-7 flex flex-wrap justify-center items-start">
                <div className = "w-full flex flex-wrap justify-center items-center mb-3">
                    <Search query = {query} onQuery = {setQuery}/>

                    <Sorts query = {query} onQuery = {setQuery}/>
                </div>


                <div className = {`w-10/12 flex flex-wrap justify-center items-stretch ${DUMMYDATA.length === 0 && 'h-[67vh]'}`}>
                    {
                        DUMMYDATA.length === 0 ?
                        <Loader/> :
                        filteredProducts.length === 0 ? 

                        <div className = "w-full bg-emer ald-300 flex flex-wrap select-none justify-center items-center mt-10">
                            <p className = "capitalize text-xl">nothing found ! 🥹</p>
                        </div> : 
                        
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