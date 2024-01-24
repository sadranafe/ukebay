import { memo } from "react";

const AddToCartBTN = memo(({ data , dispatch }) => {
    return (
        <button onClick = {() => dispatch({ type : 'ADD_TO_CART' , payLoad : data })} className = 'border border-blue-300 hover:bg-blue-300 transition-all rounded-xl capitalize p-2 px-10 '>add to cart</button>
    );
});

const IncreaseBTN = memo(({ data , dispatch }) => {
    return (
        <button onClick = {() => dispatch({ type : 'INCREASE_QUANTITY' , payLoad : data })} className = 'hover:bg-blue-200 transition-all rounded-lg p-2 pb-1.5 ml-2'>
            <i className = 'bx bx-plus'></i>
        </button>
    );
});

const DecreasetBTN = memo(({ data , dispatch , isDisabled }) => {
    return (
        <button disabled = { isDisabled } onClick = {() => dispatch({ type : 'DECREASE_QUANTITY' , payLoad : data })} className = 'hover:bg-blue-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all rounded-lg p-2 pb-1.5 mr-2'>
            <i className = 'bx bx-minus'></i>
        </button>
    );
});

const DeleteBTN = memo(({ data , dispatch }) => {
    return (
        <button onClick = {() => dispatch({ type : 'REMOVE_ITEM' , payLoad : data })} className = 'hover:border-red-500 border border-transparent transition-all rounded-lg p-2 pb-1.5 mr-2 text-red-500'>
            <i className = 'bx bx-trash'></i>
        </button>
    );
});

export { AddToCartBTN , IncreaseBTN , DecreasetBTN , DeleteBTN };