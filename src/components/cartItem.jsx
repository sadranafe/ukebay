import { Link } from "react-router-dom";
import { shortenText } from "../helper/helper";
import { DecreasetBTN, DeleteBTN, IncreaseBTN } from "./Layout/Btn";


const CartItem = ({ data , dispatch }) => {
    const {id , title , image : img , price , category , quantity} = data;
    
    return (
        <>
            <div className="w-full flex flex-wrap justify-center items-center mx-5 my-2 bg-gradient-to-br from-neutral-50/70 to-blue-100/20 bg-neutral-200 p-2 rounded-xl">

                <div className = "relative w-1/2 flex flex-wrap justify-evenly items-center">
                    <Link to = {`/products/${id}`} className = "w-full flex flex-wrap justify-evenly items-center">
                        <img src = {img} alt = {title} className="w-[14%] h-20 rounded-xl" />

                        <div className = "w-7/12">
                            <p className = {`text-lg ${title.length > 25 && 'text-[14.5px]'}`}>{title.length > 25 ? shortenText(title) : title}</p>
                            <p>$ {price}</p>
                        </div>
                    </Link>

                    <div className = "absolute -bottom-1.5 left-[151px]">
                        <Link to = {`/products?category=${category}`} className = " text-xs text-gray-500"># {category}</Link>
                    </div>
                </div>

                <div className="w-2/12 flex flex-wrap justify-evenly items-center">
                    <DecreasetBTN data = {data} dispatch = {dispatch} isDisabled = {quantity === 1 ? true : false}/>

                    <input type = "number" value = {quantity} onChange = {() => ''} inputMode = "numeric" className = "p-2 rounded-xl w-5/12 text-center outline-none bg-transparent border border-neutral-500" />
                    
                    <IncreaseBTN data = {data} dispatch = {dispatch}/>
                </div>

                <Link to = {`/products/${id}`} className = "w-2/12 text-center">
                    <p>$ {(quantity * price).toFixed(2)}</p>
                </Link>

                <div className="w-1/12 text-center">
                    <DeleteBTN data = {data} dispatch = {dispatch}/>
                </div>
            </div>
        </>
    );
};

export default CartItem;