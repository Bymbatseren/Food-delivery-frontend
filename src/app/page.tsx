"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [category, setCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");

  async function Create(name: string) {
    await fetch(`http://localhost:4000/food-category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    Show();
    setInputValue("");
  }
  async function Show() {
    const res = await fetch(`http://localhost:4000/food-category`);
    const data = await res.json();
    setCategories(data);
  }
  async function Delete(id: number) {
    const res = await fetch(`http://localhost:4000/food-category/${id}`, {
      method: "DELETE",
    });
    Show();
  }

  useEffect(() => {
    Show();
  }, []);
  return (
    <>
      <div className="flex">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-black text-white"
          onClick={() => Create(inputValue)}
          disabled={!inputValue}
        >
          Add category
        </button>
      </div>
      {category.map((category: any) => (
        <div key={category._id} className="flex gap-5">
          <div>{category.categoryName}</div>
          <button
            onClick={() => {
              Delete(category._id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
}
