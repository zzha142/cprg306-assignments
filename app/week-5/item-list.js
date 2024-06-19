"use client"
import { useState } from "react";
import Item from "./item";
import ItemData from './items.json';

export default function ItemList(){

    let buttonStyle = "flex-1 font-bold text-xl rounded-md py-3 m-2";
    let activeStyle = "bg-orange-400";
    let inactiveStyle = "bg-orange-200";

    //map the JSON data to an array 
    let itemArray = ItemData.map(
        (item) => ({...item}) 
    )

    let [sort, setSort] = useState("name");
    let [grouped,setGrouped] = useState(false);

    //sorted item by name or category: depending on which button is clicked & the default setting is name
    if (sort === "name") {
        itemArray.sort((a,b)=>a.name.localeCompare(b.name));
    }
    else if (sort ==="category"){
        itemArray.sort((a,b)=>a.category.localeCompare(b.category));
    }
    else {
        itemArray.sort((a,b)=>a.category.localeCompare(b.category));
    }

    const handleSortChange = (event) => {
        setSort(event.target.value);
        setGrouped(false);
    }

    const handleGroupedChange = (event) =>{
        setSort(event.target.value);
        setGrouped(true);
    }    
    return (
        <section>
            <div className="flex w-1/2">
                <label className="font-bold text-xl">Sort By:</label>
                <button
                    className={`${buttonStyle} ${sort === "name" ? activeStyle : inactiveStyle}`}
                    value="name"
                    onClick={handleSortChange}
                >
                    Name
                </button>
                <button
                    className={`${buttonStyle} ${sort === "category" ? activeStyle : inactiveStyle}`}
                    value="category"
                    onClick={handleSortChange}
                >
                    Category
                </button>
                <button 
                    className={`${buttonStyle} ${sort === "grouped" ? activeStyle : inactiveStyle}`}
                    value = "grouped"
                    onClick={handleGroupedChange}
                >Grouped Category</button>
            </div>

            <div>
                {itemArray.map((item) => {
                    if (grouped === false) {
                        return (
                            <ul><Item itemObj={item} /></ul>
                        )
                    } 
                    else {
                        return (
                            <div>
                                <h2 className="text-l font-bold">{item.category}</h2>
                                <ul>
                                    <Item itemObj={item} />
                                    </ul>
                            </div>
                        );
                    }   
                })}
            </div>
        </section>
    )
}