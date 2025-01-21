import { useEffect, useState } from "react";
import { foodType } from "./types";
import Food from "./food";
import AddDish from "./addDish";

export default function FoodList() {
  const [foodList, setFoodList] = useState<foodType[]>([]);

  async function showList() {
    const res = await fetch(
      `http://localhost:4000/food?category=678d083e26492e0425d85094`
    );

    const data: foodType[] = await res.json();
    setFoodList(data);
    console.log(data);
  }

  useEffect(() => {
    showList();
  }, []);

  return (
    <div className="flex gap-5 justify-start items-start mx-5">
      <AddDish />
      <div className=" gap-6  grid grid-cols-5 ">
        {foodList.map((foodItem, index) => (
          <div key={foodItem._id}>
            <Food
              color=""
              _id={foodItem._id}
              image={foodItem.image}
              foodName={foodItem.foodName}
              price={foodItem.price}
              ingredients={foodItem.ingredients}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
