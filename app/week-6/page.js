"use client"
import NewItem from "./new-item";
import ItemList from "./item-list";
import ItemData from './items.json';
import { useState } from "react";
import { handleClientScriptLoad } from "next/script";



export default function Page(){

    const [itemList, setItemList] = useState(
        ItemData.map((items)=>({...items}))
    );

    const handleAddItem = (newItem) => {
        setItemList([...itemList,newItem])
    };

    return(
        <main className="f-screen bg-white">
            <h1 className="font-bold text-4xl">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList listOfItems={itemList}/>
        </main>
    )
}   