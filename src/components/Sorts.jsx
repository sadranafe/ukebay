import { useState } from "react";
import { createQuery } from "../helper/helper";
import dummy_sortItems from "../DummyData/dummy_sort_items";

const Sorts = ({ query , onQuery }) => {
    const [selectedSort , setSelectedSort] = useState('')

    const sortBtnHandler = ev => {
        const selectedSort = ev.target.innerHTML
        setSelectedSort(selectedSort);

        onQuery( prevState => createQuery(prevState , {sort : selectedSort}) )
    }

    return (
        <>
            <div className = "select-none flex flex-wrap justify-between items-center w-5/12">
                <div className = "w-10/12 text-sm flex flex-wrap capitalize justify-around items-center relative">
                    <button onClick = {sortBtnHandler} className = {`${query.sort === undefined && 'invisible opacity-0'} absolute -left-20 text-red-500 border border-red-500 rounded-2xl capitalize p-2.5 px-3`}>delete</button>
                    {
                        dummy_sortItems.map((item, index) =>
                            <p key = {index} onClick = {sortBtnHandler} className = {`${ query.sort === item && 'after:w-24 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:rounded-full after:bg-blue-400 after:absolute'} relative cursor-pointer p-3 px-4 rounded-xl`}>{item}</p>
                        )
                    }
                </div>

                <div className = "flex flex-wrap justify-center items-center w-2/12 ">
                    <span className = "pr-2">: Sort</span>
                    <i className = 'bx bx-sort-down text-2xl bx-flip-horizontal'></i>
                </div>
            </div>
        </>
    );
};

export default Sorts;