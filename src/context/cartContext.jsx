import { createContext, useReducer } from "react";

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