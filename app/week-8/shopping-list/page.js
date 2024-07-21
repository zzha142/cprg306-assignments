"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import ItemData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user } = useUserAuth();

  const [itemList, setItemList] = useState(
    ItemData.map((items) => ({ ...items }))
  );

  const handleAddItem = (newItem) => {
    setItemList([...itemList, newItem]);
  };

  const [selectedItemName, setSelectedItemName] = useState("");

  //works, can clean the name
  const handleItemSelect = (name) => {
    const cleanedItemName = String(name)
      .split(",")[0]
      .trim()
      .replace(/[^a-zA-Z\s]/g, "");
    setSelectedItemName(cleanedItemName);
    console.dir(cleanedItemName);
  };

  return (
    <main className="f-screen bg-white">
      {user ? (
        <section className="flex">
          <div className="flex-2">
            <h1 className="font-bold text-4xl">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList listOfItems={itemList} onItemSelect={handleItemSelect} />
          </div>
          <div className="flex-1">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </section>
      ) : (
        <div>
          <p>You must be logged in to view this page.</p>
          <Link href="/week-8/"> Go To here to sign in</Link>
        </div>
      )}
    </main>
  );
}
