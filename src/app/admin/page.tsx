"use client";
import { useEffect, useState } from "react";
import Navigation from "./components/navigation";
import { Badge } from "@/components/ui/badge";
import Modal from "./components/modal";
import FoodList from "./components/foodList";
import AddDish from "./components/addDish";

export default function Admin() {
  const [category, setCategories] = useState([]);
  const [render, setRender] = useState("");
  const [foodImage, setFoodImage] = useState();

  async function Show() {
    const res = await fetch(`http://localhost:4000/food-category`);
    const data = await res.json();
    setCategories(data);
  }


  useEffect(() => {
    Show();
  }, [render]);


  return (
    <>
      <div className="bg-[#f4f4f5] flex">
        {" "}
        <Navigation />
        <div>
          <div className="bg-white mx-4 my-[3%]">
            <p>Dishes Category</p>
            {category.map((category: any) => (
              <Badge className="bg-white text-black mr-2" key={category._id}>
                {category.categoryName}
              </Badge>
            ))}
            <Modal setRender={setRender} />
          </div>
          <AddDish/>
          <FoodList/>
        </div>
      
        
      </div>
    </>
  );
}
