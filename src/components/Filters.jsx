import { useEffect, useState } from "react";
import axios from "axios";
import { createQuery } from "../helper/helper";

const Filters = ({ query , onQuery }) => {
    const [categories , setCategories] = useState([]);

    useEffect(() => {
        axios.get('/products/categories')
        .then(res => setCategories(res))
    },[])

    const categoryHandler = ev => {
        const selectedCategory = ev.target.innerHTML;
        onQuery(prevState => {
            return (createQuery(prevState , {category : selectedCategory}))
        })
    }

    return (
        <div className = "sticky top-8 w-[190px] border border-neutral-300 rounded-2xl p-5 select-none translate-y-3">
            <div className = "text-blue-600 flex flex-wrap bg-re d-200 items-center mb-2">
                <i className = 'bx bx-category-alt text-xl'></i>
                <p className = 'capitalize pl-2 font-semibold'>categories</p>
            </div>

            <div>
                <ul className = "p-2 text-sm">
                    <li onClick = {categoryHandler} className = "capitalize hover:text-blue-500 transition-all cursor-pointer py-2 my-1">all</li>
                    {
                        categories.map((item , index) => 
                            <li key = {index} onClick = {categoryHandler} className = {`${query.category === item ? 'hover:text-neutral-950 after:w-2 after:h-2 after:bg-cyan-500 border border-cyan-500 pl-2 rounded-xl after:absolute after:-left-4 after:top-3 after:rounded-full' : 'border-transparent'} border-transparent relative border hover:text-blue-500 capitalize transition-all cursor-pointer py-2 my-1`}>{item}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Filters;