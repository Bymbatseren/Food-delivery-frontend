import { useEffect, useState } from "react";
import { foodType } from "./types";
import Food from "./food";

export default function FoodList() {
  const [foodList, setFoodList] = useState<foodType[]>([]);
 
  async function showList() {
  
      const res = await fetch(`http://localhost:4000/food`);
     
      const data: foodType[] = await res.json();
      setFoodList(data);
    
  }

  useEffect(() => {
    showList();
  }, []);



  return (
    <div>
      {foodList.map((foodItem, index) => (
        <div key={foodItem._id }>
          <Food
            _id={foodItem._id} 
            image={foodItem.image}
            foodName={foodItem.foodName}
            price={foodItem.price}
            ingredients={foodItem.ingredients}
          />
        </div>
      ))}
    </div>
  );
}

