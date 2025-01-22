import { usePut } from "./useAuthFetch";
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
export default function EditFood({ foodId, data }: any) {
  const [image, setImage] = useState<any>();
  const [foodName, setFoodName] = useState<string>("");
  const [price, setPrice] = useState<number | string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [categoryId, setCategoryId] = useState("");
  const food: any = {
    path: "food",
    id: { foodId },
    foodName,
    image,
    ingredients,
    categoryId: categoryId,
    price,
  };

  const { getFetchData }: any = usePut(food);
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="bg-[#EF4444] rounded-full w-9 h-9 flex justify-center items-center">
            edit
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
              <select className="w-[300px] h-10 border-[#E4E4E7] border-[1px] rounded-md">
                {data.map((category: any) => (
                  <option key={category._id} value="To do">
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
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
