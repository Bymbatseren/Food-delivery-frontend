import { foodType } from "./types"
export default function Food({image,foodName,price,ingredients}:foodType){
  
    return <>
    <div>
    <img src={image} className="lg:w-[240px] lg:h-[130px] rounded-xl"></img>
    <div className="flex">
    <p>{foodName}</p>
    <div>{price}</div>
    </div>
    <p>{ingredients}</p>
    </div>
    </>
}