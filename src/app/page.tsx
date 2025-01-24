"use client";

import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Badge } from "@/components/ui/badge";
import CategoryFood from "./Components/category-food";
import Footer from "./Components/Footer";
import FoodList from "./admin/components/foodList";

export default function Home() {
  const [category, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  async function Show() {
    const res = await fetch(`http://localhost:4000/food-category`);
    const data = await res.json();
    setCategories(data);
  }

  const handleCategory = (categoryId: string, name: string) => {
    setSelectedCategory(categoryId);
  };

  useEffect(() => {
    Show();
  }, []);

  return (
    <>
      <div className="bg-[#404040] min-h-screen">
        <Header />
        <img src="/background.png" className="w-full object-fill"></img>
        <div>
          <div className="ml-10">
            <p className="text-white font-[600] text-[30px] ml-2 mt-5">
              Categories
            </p>
            {category.map((category: any) => (
              <Badge
                className="bg-white text-black ml-2 mt-5 rounded-full"
                key={category._id}
                onClick={() =>
                  handleCategory(category._id, category.categoryName)
                }
              >
                {category.categoryName}
              </Badge>
            ))}
            <div className="mt-[100px]">
              <FoodList selectedCategory={selectedCategory} />
              <div className="mt-10"></div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
