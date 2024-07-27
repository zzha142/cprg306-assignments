"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import { useEffect, useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [itemList, setItemList] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
    if (user) {
      try {
        const items = await getItems({ userId: user.uid });
        setItemList(items);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      try {
        const addedItem = await addItem({ userId: user.uid, item: newItem });
        newItem.id = addedItem.id;
        setItemList((prevItemList) => [...prevItemList, newItem]); // Update the UI
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };

  const handleItemSelect = (name) => {
    const cleanedItemName = String(name)
      .split(",")[0]
      .trim()
      .replace(/[^a-zA-Z\s]/g, "");
    setSelectedItemName(cleanedItemName);
    console.dir(cleanedItemName);
  };

  return (
    <main className="h-screen bg-white">
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
          <Link href="/week-10/"> Go To here to sign in</Link>
        </div>
      )}
    </main>
  );
}
