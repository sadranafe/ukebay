import { Link } from 'react-router-dom';
import { Rating, Tooltip } from '@mui/material';
import UseCart from '../hooks/useCart';
import { shortenText } from '../helper/helper';

const Product = ({ data , trendingMode }) => {
    const [state , dispatch] = UseCart()
    const {image : img , title , id , price , rating} = data;
        
    return (
        <>
            {
                trendingMode ?
                <Tooltip arrow title = {<div className = 'flex flex-wrap justify-center items-center'><Rating value = {rating.rate} precision = {0.5} readOnly className = 'text-white'/> <p className = 'text-base pl-2'>{rating.rate}</p></div>}>
                    <div className = {`overflow-hidden group flex flex-wrap justify-center items-center ${trendingMode ? 'w-[235px]' : 'w-[250px]'} border border-solid bg-white border-neutral-200 rounded-2xl p-5 m-3`}>
                        <Link to = {`/products/${id}`} className = 'w-full h-[200px] pb-5 relative'>
                            <img src = {img} alt = {title} className = 'w-full h-full'/>
                        </Link>


                        <Link to = {`/products/${id}`} className = 'w-full'>
                            <div>
                                <h3 className = 'text-sky-700 text-lg'>{shortenText(title)}</h3>
                            </div>

                            <div>
                                <p className = 'text-gray-600 mx-1 my-4'>$ {price}</p>
                            </div>
                        </Link>

                        <div>
                            <button className = 'border border-blue-300 hover:bg-blue-300 transition-all rounded-xl capitalize p-2 px-10 '>add to cart</button>
                        </div>
                    </div>
                </Tooltip> :

                <div className = {`overflow-hidden group flex flex-wrap justify-center items-center ${trendingMode ? 'w-[235px]' : 'w-[250px]'} border border-solid bg-white border-neutral-200 rounded-2xl p-5 m-3`}>
                    <Link to = {`/products/${id}`} className = 'w-full h-[230px] pb-5 relative'>
                        <img src = {img} alt = {title} className = 'w-full h-full'/>
                    </Link>


                    <Link to = {`/products/${id}`} className = 'w-full'>
                        <div>
                            <h3 className = 'text-sky-700 text-lg'>{ shortenText(title) }</h3>
                        </div>

                        <div>
                            <p className = 'text-gray-600 mx-1 my-4'>$ {price}</p>
                        </div>
                    </Link>

                    <div>
                        <button onClick = {() => dispatch({type : 'ADD_TO_CART' , payLoad : data})} className = 'border border-blue-300 hover:bg-blue-300 transition-all rounded-xl capitalize p-2 px-10 '>add to cart</button>
                    </div>
                </div>
            }

        </>
    );
};

export default Product;