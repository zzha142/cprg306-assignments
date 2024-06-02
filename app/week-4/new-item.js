"use client"

import { useState } from "react";

export default function NewItem(){
    const formStyles = "block mb-4 rounded-md bg-white text-xl w-full mt-1 p-1 mx-auto flex-1 focus:outline-none focus:ring-4 focus:ring-blue-600";
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newEvent = {
            name,
            quantity,
            category,
        };
        console.log(newEvent);
        alert(`Added item: ${newEvent.name}, quantity: ${newEvent.quantity}, category: ${newEvent.category}`);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    return(
        <>
            <div className="flex items-center justify-center w-1/3 h-1/4 mx-auto">
                <form className="p-2 m-4 bg-blue-900 text-black max-w-sm w-full rounded-md" onSubmit={handleSubmit}>
                    <div> 
                        <input className={formStyles} placeholder="Item name" type="text" required onChange={handleNameChange} value={name}></input>
                    </div>
                    <div className="flex space-x-4 w-full">
                        <input className={formStyles} type="number" min="1" max="99" required onChange={handleQuantityChange} value={quantity}></input>
                        <select className={formStyles} name="category" value={category} required onChange={handleCategoryChange} >
                            <option value="">Select a category</option>
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>   
                        <button className="block mb-4 rounded-md text-xl mx-auto mt-1 p-1 bg-blue-500 hover:bg-blue-600 w-full"
                                type="submit">
                            +
                        </button>
                    </div>
                </form>
            </div>
        </>

    )
}