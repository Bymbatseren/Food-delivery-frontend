"use client";
import { useEffect, useState } from "react";
import Navigation from "./components/navigation";
import { Badge } from "@/components/ui/badge";
import Modal from "./components/modal";

export default function Admin() {
  const [category, setCategories] = useState([]);
  const [render, setRender] = useState("");
  const [food, setFood] = useState("");

  async function Show() {
    const res = await fetch(`http://localhost:4000/food-category`);
    const data = await res.json();
    setCategories(data);
  }
  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "Food_delivery");
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/df88yvhqr/upload`,
        { method: "POST", body: data }
      );
      const dataJson = await response.json();
      console.log(dataJson);
      setFood(dataJson.secure_url);
    }
  };

  useEffect(() => {
    Show();
  }, [render]);
  console.log(food);

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
        </div>
        <div className="bg-white my-[3%]">
          <input type="file" onChange={handleUpload}></input>
          <img src={food}></img>
        </div>
      </div>
    </>
  );
}
