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