import { createContext, useReducer } from "react";
import { sumHandler } from "../helper/helper";

const cart_context = createContext();

const initialValue = {
    DUMMYDATA_CART: [],
    totalPrice: 0,
    totalQuantity : 0,
    checkOut: false,
}

const reducer = (state , action) => {
    switch(action.type){
        case 'ADD_TO_CART' : {
            const productIsInCart = state.DUMMYDATA_CART.find(item => item.id === action.payLoad.id)

            if(!productIsInCart){
                state.DUMMYDATA_CART.push({ ...action.payLoad , quantity : 1 })
            }

            return {
                ...state,
                ...sumHandler(state.DUMMYDATA_CART)
            }
        }

        case 'REMOVE_ITEM': {
            const selectedItem = state.DUMMYDATA_CART.filter(item => {
                return item.id !== action.payLoad.id
            })

            return {
                ...state,
                DUMMYDATA_CART: [...selectedItem],
                ...sumHandler(state.DUMMYDATA_CART)
            }
        }

        case 'INCREASE_QUANTITY': {
            const selectedItemIndex = state.DUMMYDATA_CART.findIndex(item => {
                return item.id === action.payLoad.id
            })

            state.DUMMYDATA_CART[selectedItemIndex].quantity++

            return {
                ...state,
                ...sumHandler(state.DUMMYDATA_CART)
            }
        }

        case 'DECREASE_QUANTITY': {
            const selectedItemIndex = state.DUMMYDATA_CART.findIndex(item => {
                return item.id === action.payLoad.id
            })

            if(state.DUMMYDATA_CART[selectedItemIndex].quantity > 1){
                state.DUMMYDATA_CART[selectedItemIndex].quantity--
            }

            return {
                ...state,
                ...sumHandler(state.DUMMYDATA_CART),
            }
        }
    }
}

const CartContext = ({ children }) => {
    const [state , dispatch] = useReducer( reducer , initialValue );

    return (
        <cart_context.Provider value = {{  state , dispatch }}>
            { children }
        </cart_context.Provider>
    );
};

export { cart_context };
export default CartContext;