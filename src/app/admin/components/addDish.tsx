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

export default function AddDish() {
  const [image, setImage] = useState<string>();
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
  
      const food: foodType = {
        foodName,
        price: Number(price),
        image,
        ingredients,
        _id,
     
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
      setImage("");
    
    
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="bg-[#EF4444] rounded-full w-9 h-9 flex justify-center items-center">
          +
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
            <label>Upload Image</label>
            <input type="file" onChange={handleUpload} className="p-2" />
              <img
                src={image}
                alt="Uploaded dish"
                className="mt-2 w-32 h-32 object-cover"
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
