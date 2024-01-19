import React from 'react';

const Search = () => {
    return (
        <div className = " w-3/12 -translate-x-44">
            <input type = "text" placeholder = 'search ....' className = "relative w-10/12 shadow-sm p-3 px-5 pr-12 m-2 rounded-xl text-sky-800"/>                

            <i className = "bx bx-x absolute top-3.5 rounded-full p-1 px-2 text-lg right-14 cursor-pointer"></i>

            <button className = "bg-blue-400 p-1 pt-1.5 px-2 rounded-full">
                <i className = "bx bx-search"></i>
            </button>
        </div>
    );
};

export default Search;