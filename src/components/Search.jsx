import { useState } from "react";
import { createQuery } from "../helper/helper";

const Search = ({ query , onQuery }) => {
    const [search , setSearch] = useState('');

    const submitHandler = () => {
        onQuery(prevState => {
            return ( createQuery(prevState , { search }) )
        })
    }
    
    const deleteSearchHandler = () => {
        onQuery( prevState =>( createQuery(prevState , { search : '' })) )
        setSearch('')
    }

    

    return (
        <div className = " w-3/12 -translate-x-44">
            <input onChange = { ev => setSearch(ev.target.value.trimStart().toLowerCase()) } value = {search} type = "text" placeholder = 'search ....' className = "relative w-10/12 shadow-sm p-3 px-5 pr-12 m-2 rounded-xl text-sky-800"/>                
            {
                search.length !== 0 &&
                <i onClick = {deleteSearchHandler} className = "bx bx-x cursor-pointer w-8 h-8 pb-0.5 flex flex-wrap justify-center items-center absolute top-4 rounded-full text-lg right-14"></i>
            }

            <button onClick = {submitHandler} className = "bg-blue-400 p-1 pt-1.5 px-2 rounded-full">
                <i className = "bx bx-search"></i>
            </button>
        </div>
    );
};

export default Search;