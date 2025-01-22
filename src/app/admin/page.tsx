"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import FoodList from "./components/foodList"; // FoodList компонент
import Navigation from "./components/navigation";
import Modal from "./components/modal";
import AddDish from "./components/addDish";

export default function Admin() {
  const [category, setCategories] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>("");

  async function Show() {
    const res = await fetch(`http://localhost:4000/food-category`);
    const data = await res.json();
    setCategories(data);
  }

  useEffect(() => {
    Show();
  }, []);

  const handleCategory = (categoryId: string, name: string) => {
    setSelectedCategory(categoryId);
    setSelectedCategoryName(name);
  };
  console.log(selectedCategory);
  console.log(selectedCategoryName);

  return (
    <div className="bg-[#f4f4f5] flex">
      <Navigation />
      <div>
        <div className="bg-white mx-5 my-[3%]">
          <p>Dishes Category</p>
          {category.map((category: any) => (
            <Badge
              key={category._id}
              className="bg-white text-black mr-2 cursor-pointer"
              onClick={() =>
                handleCategory(category._id, category.categoryName)
              }
            >
              {category.categoryName}
            </Badge>
          ))}
          <Modal />
        </div>
        <div className="ml-10">
          <p className="font-[600] text-[#09090B] text-[20px]">
            {selectedCategoryName}
          </p>
          <div className="flex">
            <div className="mr-5">
              <AddDish
                categoryId={selectedCategory}
                name={selectedCategoryName}
              />
            </div>
            <FoodList selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
}
