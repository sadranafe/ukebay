import { createContext } from "react";

const cart_context = createContext();

const CartContext = ({ children }) => {
    return (
        <cart_context.Provider>
            { children }
        </cart_context.Provider>
    );
};

export { cart_context };
export default CartContext;