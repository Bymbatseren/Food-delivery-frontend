import { updateRequest } from "@/app/Components/useAuthFetch";
import { useState } from "react";
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
import { FiEdit2 } from "react-icons/fi";

export default function EditFood({ food, data }: any) {
  const [image, setImage] = useState<any>(food.image);
  const [foodName, setFoodName] = useState<string>(food?.foodName);
  const [price, setPrice] = useState<number | string>(food.price);
  const [ingredients, setIngredients] = useState<string>(food.ingredients);
  const [categoryId, setCategoryId] = useState<any>(food.categoryId);

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

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="bg-white rounded-full w-9 h-9 flex justify-center items-center absolute bottom-2 right-5">
            <FiEdit2 className="text-red-600" />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Dishes info</AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
            <div className="flex gap-10">
              <p>Dish name</p>
              <input
                className="w-[300px] h-10 border-[#E4E4E7] border-[1px] rounded-md"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
              ></input>
            </div>
            <div className="flex gap-10">
              <p>Dish category</p>
              <select
                className="w-[300px] h-10 border-[#E4E4E7] border-[1px] rounded-md"
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {data.map((category: any) => (
                  <option key={category._id} value={category._id}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-10">
              <p>Ingredients</p>
              <input
                className="w-[300px] h-10 border-[#E4E4E7] border-[1px] rounded-md"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              ></input>
            </div>
            <div className="flex gap-10">
              <p>price</p>
              <input
                className="w-[300px] h-10 border-[#E4E4E7] border-[1px] rounded-md"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
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
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                updateRequest({
                  path: "food",
                  id: food.foodId,
                  item: {
                    foodName,
                    price: Number(price),
                    image,
                    ingredients,
                    category: categoryId,
                  },
                })
              }
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
