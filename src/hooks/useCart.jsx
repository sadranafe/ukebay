import { useContext } from 'react';
import { cart_context } from '../context/cartContext';

const UseCart = () => {
    const { state , dispatch } = useContext(cart_context)
    return [ state , dispatch ];
};

export default UseCart;