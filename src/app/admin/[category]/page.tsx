"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navigation from "../components/navigation";
import AddDish from "../components/addDish";
import FoodList from "../components/foodList";
import { Badge } from "@/components/ui/badge";
import Modal from "../components/modal";
import Link from "next/link";

export default function Category() {
  const params = useParams();
  console.log(params);
  const [category, setCategories] = useState<any>([]);
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
      <div className="bg-white mx-5 my-[3%] w-full">
        <p>Dishes Category</p>
        {category.map((category: any) => (
          <Link href={`${category._id}`} key={category._id}>
            <Badge className="bg-white text-black mr-2 cursor-pointer">
              {category.categoryName}
            </Badge>
          </Link>
        ))}
        <Modal />
      </div>
      <div className="flex">
        <div className="mr-5">
          <AddDish categoryId={params.category} />
        </div>
        <FoodList selectedCategory={params.category} />
      </div>
    </>
  );
}
