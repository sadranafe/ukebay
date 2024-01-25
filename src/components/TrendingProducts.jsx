import { Skeleton } from "@mui/material";
import UseProducts from "../hooks/useProducts";
import Product from "./Product";

const TrendingProducts = () => {
    const DUMMYDATA = UseProducts()

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
                        DUMMYDATA.length === 0 ? 
                        <div className = "p-5 border rounded-xl">
                            <Skeleton animation = 'wave' variant = "rectangular" width = {200} height = {200} style = {{borderRadius : '12px'}} />
                            <Skeleton animation = 'wave' variant = "text" style = {{borderRadius : '6px' , marginTop : '7px'}} />
                            <Skeleton animation = 'wave' variant = "text" style = {{borderRadius : '6px' , marginTop : '2px'}} />
                            <Skeleton animation = 'wave' variant = "text" style = {{borderRadius : '6px' , marginTop : '-5px' , padding : '20px'}} />
                        </div> :
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