"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import ItemData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [itemList, setItemList] = useState(
    ItemData.map((items) => ({ ...items }))
  );

  const handleAddItem = (newItem) => {
    setItemList([...itemList, newItem]);
  };

  return (
    <main className=" flex f-screen bg-white">
      <div className="flex-2">
        <h1 className="font-bold text-4xl">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList listOfItems={itemList} />
      </div>
      <div className="flex-1">
        <MealIdeas />
      </div>
    </main>
  );
}
