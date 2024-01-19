import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const HighlightedProduct = ({ data }) => {
    const {id , image : img , title , category , rating , price , description : desc} = data;

    return (
        <>
            <div className = 'relative w-10/12 bg-white pr-16 py-10 border-4 border-neutral-400 border-double flex flex-wrap justify-center items-center rounded-3xl'>
                <div className = 'absolute top-4 right-4'>
                    <Link to = '/products' className = 'flex flex-wrap justify-center p-0.5 px-2 bg-red-500 rounded-full text-white/95 group items-center'>
                        <i className = 'bx bx-left-arrow-alt text-xl group-hover:-translate-x-0.5 group-hover:opacity-100 transition-all translate-x-10 opacity-0'></i>
                        <span className = 'group-hover:translate-x-0 -translate-x-1.5 transition-all'>back</span>
                    </Link>
                </div>

                <div className = 'w-4/12 p-2 flex flex-wrap justify-center items-center'>
                    <div className = 'w-9/12'>
                        <img src = {img} alt = {title} className = 'w-full h-80'/>
                    </div>
                </div>

                <div className = 'w-8/12 bg-r ed-200'>
                    <div>
                        <h1 className = 'text-2xl capitalize'>{title}</h1>
                    </div>

                    <div className = 'flex flex-wrap justify-between my-5'>
                        <span>$ {price}</span>
                        {
                            rating !== undefined &&
                            <div className = 'flex flex-wrap justify-center items-center'>
                                <p className = 'pr-2'>{rating.rate}</p>
                                <Rating value = {rating.rate} precision = {0.5} readOnly/>
                            </div>
                        }
                    </div>

                    <div className = 'my-2 mb-3'>
                        <p className = 'text-justify'>{desc}</p>
                    </div>

                    <div className = 'flex flex-wrap justify-between items-center'>
                        <div className = 'p-2 text-sm'>
                            tags : 
                            <Link to = {`/products?category=${category}`} className = 'p-2 text-gray-500 hover:text-gray-800 transition-all'># {category}</Link>
                        </div>

                        <button className = 'border border-blue-300 hover:bg-blue-300 transition-all rounded-xl capitalize p-2 px-10 '>add to cart</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default HighlightedProduct;