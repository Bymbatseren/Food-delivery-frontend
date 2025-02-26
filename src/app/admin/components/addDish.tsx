"use client";

import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { foodType } from "./types";

export default function AddDish({ categoryId, name }: any) {
  const [image, setImage] = useState<any>();
  const [foodName, setFoodName] = useState<string>("");
  const [price, setPrice] = useState<number | string>("");
  const [ingredients, setIngredients] = useState<string>("");

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "Food_delivery");

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/df88yvhqr/upload`,
          { method: "POST", body: data }
        );

        if (!response.ok) throw new Error("Image upload failed");

        const dataJson = await response.json();
        setImage(dataJson.secure_url);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    }
  };

  const createDish = async () => {
    const food: any = {
      foodName,
      price: Number(price),
      image,
      ingredients,
      category: categoryId,
    };
    const response = await fetch(`http://localhost:4000/food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    });
    setFoodName("");
    setPrice("");
    setIngredients("");
    setImage({});
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="lg:w-[270px] lg:h-[280px]  bg-white border-[2px] rounded-lg flex justify-center items-center border-dotted border-[#EF4444] ">
          <div>
            <div className="flex justify-center items-center">
              <div className="bg-[#EF4444] rounded-full w-9 h-9 flex justify-center items-center ">
                +
              </div>
            </div>
            <div>Add new Dish to {name} </div>
          </div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add New Dish</AlertDialogTitle>
          <AlertDialogDescription>
            Fill in the details for the new dish below:
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4">
          <div>
            <label>Food Name</label>
            <input
              type="text"
              placeholder="Enter food name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label>Ingredients</label>
            <input
              type="text"
              placeholder="Enter ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="image">
              {!image && (
                <div
                  className="w-[400px] h-[200px] bg-[#7F7F800D] mt-20 flex
                justify-center items-center"
                >
                  <div>
                    <div className="w-[28px] h-[28px] rounded-full bg-white ml-5 flex justify-center items-center"></div>
                    <p>Add photo</p>
                  </div>
                </div>
              )}
              {image && (
                <div className="h-48 w-96 mt-10 ml-4 bg-slate-300">
                  <img
                    src={image}
                    alt="problem"
                    className="object-cover h-48 w-96"
                  ></img>
                </div>
              )}
            </label>
            <input
              id="image"
              type="file"
              onChange={handleUpload}
              className="p-2 hidden"
            />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={createDish}>Add Dish</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
