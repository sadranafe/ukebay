import { useState } from "react";
import dummy_sortItems from "../DummyData/dummy_sort_items";

const Sorts = () => {
    const [selectedSort , setSelectedSort] = useState('')

    const sortBtnHandler = ev => {
        const selectedSort = ev.target.innerHTML
        setSelectedSort(selectedSort);
    }

    return (
        <>
            <div className = "select-none flex flex-wrap justify-between items-center w-5/12">
                <div className = "w-10/12 text-sm flex flex-wrap capitalize justify-around items-center relative">
                    <button onClick = {sortBtnHandler} className = {`absolute -left-20 text-red-500 border border-red-500 rounded-2xl capitalize p-2.5 px-3`}>delete</button>
                    {
                        dummy_sortItems.map((item, index) =>
                            <p key = {index} onClick = {sortBtnHandler} className = {`relative cursor-pointer p-3 px-4 rounded-xl`}>{item}</p>
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