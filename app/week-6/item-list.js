"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ listOfItems }) {
  let buttonStyle = "flex-1 font-bold text-xl rounded-md py-3 m-2";
  let activeStyle = "bg-orange-400";
  let inactiveStyle = "bg-orange-200";

  let [sort, setSort] = useState("name");
  let [grouped, setGrouped] = useState(false);

  //sorted item by name or category: depending on which button is clicked & the default setting is name
  if (sort === "name") {
    listOfItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "category") {
    listOfItems.sort((a, b) => a.category.localeCompare(b.category));
  } else {
    listOfItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  const handleSortChange = (event) => {
    setSort(event.target.value);
    setGrouped(false);
  };
  const handleGroupedChange = (event) => {
    setSort(event.target.value);
    setGrouped(true);
  };

  const renderItems = () => {
    const displayedCategories = [];
    return listOfItems.map((item) => {
      if (grouped) {
        if (!displayedCategories.includes(item.category)) {
          displayedCategories.push(item.category);
          return (
            <div>
              <h2 className="text-xl font-bold capitalize">{item.category}</h2>
              <ul>
                <Item itemObj={item} />
              </ul>
            </div>
          );
        } else {
          return (
            <ul>
              <Item itemObj={item} />
            </ul>
          );
        }
      } else {
        return (
          <ul>
            <Item itemObj={item} />
          </ul>
        );
      }
    });
  };

  return (
    <section>
      <div className="flex w-1/2">
        <label className="font-bold text-xl">Sort By:</label>
        <button
          className={`${buttonStyle} ${
            sort === "name" ? activeStyle : inactiveStyle
          }`}
          value="name"
          onClick={handleSortChange}
        >
          Name
        </button>
        <button
          className={`${buttonStyle} ${
            sort === "category" ? activeStyle : inactiveStyle
          }`}
          value="category"
          onClick={handleSortChange}
        >
          Category
        </button>
        <button
          className={`${buttonStyle} ${
            sort === "grouped" ? activeStyle : inactiveStyle
          }`}
          value="grouped"
          onClick={handleGroupedChange}
        >
          Grouped Category
        </button>
      </div>

      <div>{renderItems()}</div>
    </section>
  );
}
