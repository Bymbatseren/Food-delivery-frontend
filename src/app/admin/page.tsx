"use client"
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import FoodList from "./components/foodList"; // FoodList компонент

export default function Admin() {
  const [category, setCategories] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  async function Show() {
    const res = await fetch(`http://localhost:4000/food-category`);
    const data = await res.json();
    setCategories(data);
  }

  useEffect(() => {
    Show();
  }, []);

  const handleCategory = (categoryId: string) => {
    setSelectedCategory(categoryId); 
  };
  console.log(selectedCategory)

  return (
    <div className="bg-[#f4f4f5] flex">
      <div>
        <div className="bg-white mx-5 my-[3%]">
          <p>Dishes Category</p>
          {category.map((category: any) => (
            <Badge
              key={category._id}
              className="bg-white text-black mr-2 cursor-pointer"
              onClick={() => handleCategory(category._id)}
            >
              {category.categoryName}
            </Badge>
          ))}
        </div>

       
        <FoodList selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

