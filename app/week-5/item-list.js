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
    
    //sorted item by name or category: depending on which button is clicked & the default setting is name
    if (sort === "name") {
        itemArray.sort((a,b)=>a.name.localeCompare(b.name));
    }
    else if (sort ==="category"){
        itemArray.sort((a,b)=>a.category.localeCompare(b.category));
    }
    
    const handleSortChange = (event) =>setSort(event.target.value);

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
                <button>Grouped Category</button>
            </div>

            <div>
                {itemArray.map((item)=>(
                    <Item itemObj = {item}/>
                ))}
                
                {/* {itemArray.map((item)=> {
                    if(newcategory){
                        (<h2></h2>
                            <ul></ul>
                        )
                    }
                }
                
                )} */}
            </div>
        </section>
    )
}