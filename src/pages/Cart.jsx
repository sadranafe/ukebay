import { Link } from "react-router-dom";
import UseCart from "../hooks/useCart";
import CartItem from "../components/cartItem";

const Cart = () => {
    const [{ DUMMYDATA_CART , totalPrice }, dispatch] = UseCart();
    return (
        <div className = "flex flex-wrap justify-center items-start">
            <div className = "w-9/12 h-screen overflow-scroll flex flex-wrap justify-center content-start items-start">
                {
                    DUMMYDATA_CART.length === 0
                        ?

                        <div className="w-full h-[67vh] flex flex-wrap justify-center items-center content-center">
                            <img src = "empty-cart.svg" alt = "mohammad sadra nafe"/>

                            <div className = "w-full text-center mt-3 mb-1">
                                <p className = "text-3xl capitalize">cart is empty !</p>
                            </div>

                            <Link to='/products' className = "text-blue-600 w-full text-center flex flex-wrap justify-center items-center">
                                <i className="bx bx-left-arrow-alt text-xl"></i>
                                <p className="text-sm">get back to shop</p>
                            </Link>
                        </div>
                        
                        :
                        DUMMYDATA_CART.map((item, index) =>
                            <CartItem key={index} data={item} dispatch={dispatch} />
                        )
                }
            </div>

            {
                DUMMYDATA_CART.length !== 0 &&
                <div className = "w-3/12 shadow-sm shadow-gray-200 h-screen flex flex-wrap justify-center items-center content-center p-2 px-7 rounded-tl-3xl bg-blue-50/25 border-l border-t border-neutral-100">
                    <div className = "p-2 pb-3 w-full text-center">
                        <h3 className = "text-2xl capitalize">order summary</h3>
                    </div>

                    <div className = "w-full mt-2 mb-7">
                        <div className = "mx-auto w-12 h-[2px] bg-gray-200 rounded-full"></div>
                    </div>

                    <div className = "mb-7">
                        <h3 className = "capitalize mb-2">promo code :</h3>

                        <div className = "py-2 flex justify-center items-center">
                            <input type = "text" className = "p-3 px-4 text-sm rounded-xl bg-transparent border border-neutral-200 placeholder:text-xs" placeholder = "Enter promo code . . ." />
                            <button className = "capitalize text-sm bg-blue-400 p-2 ml-1 rounded-xl">apply</button>
                        </div>
                    </div>

                    <div className = "w-full h-[1.2px] bg-neutral-200 rounded-xl mb-7"></div>

                    <div className = "text-center w-full">
                        <div className = "flex flex-wrap mb-7 justify-between items-center">
                            <p>total cost</p>

                            <p>$ {totalPrice.toFixed(2)}</p>
                        </div>

                        <button className = "capitalize bg-blue-400 rounded-xl p-3 w-10/12">checkout</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart;