import { useEffect, useState } from "react";
import Food from "./food";
import AddDish from "./addDish";
import CategoryFood from "@/app/Components/category-food";

interface FoodListProps {
  selectedCategory: string | null | any;
}

export default function FoodList({ selectedCategory }: FoodListProps) {
  const [foodList, setFoodList] = useState<any>([]);

  useEffect(() => {
    if (selectedCategory) {
      fetchFoodByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  async function fetchFoodByCategory(categoryId: string) {
    const res = await fetch(
      `http://localhost:4000/food?category=${categoryId}`
    );
    const data = await res.json();
    setFoodList(data);
  }

  return (
    <div className="flex">
      <div className="grid grid-cols-3 gap-4">
        {foodList.map((foodItem: any) => (
          <Food
            key={foodItem._id}
            _id={foodItem._id}
            foodName={foodItem.foodName}
            price={foodItem.price}
            image={foodItem.image}
            ingredients={foodItem.ingredients}
            color=""
            foodId={foodItem._id}
          />
        ))}
      </div>
    </div>
  );
}
