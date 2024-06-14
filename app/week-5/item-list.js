"use client"
import { useState } from "react";
import Item from "./item";
import ItemData from './items.json';

export default function ItemList(){

    let buttonStyle = "flex-1 font-bold text-xl rounded-md py-3 m-2";
    let activeStyle = "bg-orange-200";
    let inactiveStyle = "bg-orange-400";

    //map the JSON data to an array 
    let itemArray = ItemData.map(
        (item) => ({...item}) 
    )

    let [sort, setSort] = useState("name");

    // if (sort !="name") {
    //     itemArray = itemArray.sort((item)=>item.category === sort);
    // }

    const handleSortChange = (event) =>setSort(event.target.value);

    return (
        <section>
            <div className="flex w-1/2">
                <label className="font-bold text-xl">Sort By:</label>
                <button className={buttonStyle} value="name" onClick={handleSortChange}>Name</button>
                <button className={buttonStyle} value="category" onClick={handleSortChange}>Category</button>
                <button className={buttonStyle} >Grouped Category</button>
            </div>

            <div>
                {itemArray.map((item)=>(
                    <Item itemObj = {item}/>
                ))}
            </div>
        </section>
    )
}