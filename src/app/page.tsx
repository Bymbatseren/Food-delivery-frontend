"use client";

import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Badge } from "@/components/ui/badge";
import CategoryFood from "./Components/category-food";
import Footer from "./Components/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

  useEffect(() => {
    Show();
  }, []);
  return (
    <>
      <div className="bg-[#404040] min-h-screen">
        <Header />
        <img src="/background.png" className="w-full object-fill"></img>
        <div className="ml-10">
          <p className="text-white font-[600] text-[30px] ml-2 mt-5">
            Categories
          </p>
          {category.map((category: any) => (
            <Badge
              className="bg-white text-black ml-2 mt-5 rounded-full"
              key={category._id}
            >
              {category.categoryName}
            </Badge>
          ))}
          <div className="mt-[100px]">
            <CategoryFood />
            <div className="mt-10">
              <CategoryFood />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
