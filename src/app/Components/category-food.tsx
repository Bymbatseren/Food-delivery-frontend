import { useState, useEffect } from "react";
import { foodType } from "../admin/components/types";
import Food from "../admin/components/food";

export default function CategoryFood() {
  const [foodList, setFoodList] = useState<foodType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<foodType | null>(null);
  const [totalNumber,setTotalNumber]=useState<number>(1)


  async function showList() {
    const res = await fetch("http://localhost:4000/food");
    const data: foodType[] = await res.json();
    setFoodList(data);
  }

  useEffect(() => {
    showList();
  }, []);

  const handleFoodClick = (foodItem: foodType) => {
    setSelectedFood(foodItem); 
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false); 
    setSelectedFood(null);
    setTotalNumber(1)
  };

  const plusTotalNumber=()=>{
    setTotalNumber(totalNumber+1)
  }
  const minusTotalNumber=()=>{
    if(totalNumber>=1){
        setTotalNumber(totalNumber-1)
    }
  }
  return (
    <>
      
      <div className="flex gap-6 flex-wrap">
        {foodList.slice(0, 6).map((foodItem) => (
          <div key={foodItem._id} onClick={() => handleFoodClick(foodItem)}>
            <Food
              color="white"
              _id={foodItem._id}
              image={foodItem.image}
              foodName={foodItem.foodName}
              price={foodItem.price}
              ingredients={foodItem.ingredients}
            />
          </div>
        ))}
      </div>

      
      {isModalOpen && selectedFood && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          
        >
          <div
            className="bg-white rounded-lg w-[826px] h-[412px] p-6"
          >  
            <div className="flex">
              <img
                src={selectedFood.image}
                alt={selectedFood.foodName}
                className="w-[380px] h-[360px] object-fill"
              />
            
              <div className="ml-6 mt-4">
              <div className="ml-[350px] rounded-full border-[#E4E4E7] border-[1px] flex justify-center items-center"><button onClick={closeModal}>X</button></div>
                <p className="text-xl font-semibold">{selectedFood.foodName}</p>
                <p>{selectedFood.ingredients}</p>
                <div className="flex  mt-[100px]">
                    <div className="w-[100px]">
                     <div className=" text-lg">Total price:</div> 
                     <div className="text-lg">${selectedFood.price * totalNumber}</div>
                    </div>
                    <div className="flex ml-[150px] justify-center items-center gap-5">
                     <div  onClick={minusTotalNumber} className="rounded-full border-[1px] border-[#09090B] w-[44px] h-[44px] flex justify-center items-center">-</div>
                     <div>{totalNumber}</div>
                    <div onClick={plusTotalNumber} className="rounded-full border-[1px] border-[#09090B] w-[44px] h-[44px] flex justify-center items-center">+</div>
                    </div>
                </div>
                
                <button className="w-full h-[44px] rounded-full bg-[#18181B] text-white">
                  Add to Cart
                </button>
              </div>
            </div>
         
          </div>
        </div>
      )}
    </>
  );
}

