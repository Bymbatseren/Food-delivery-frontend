import { foodType } from "./types";
import useFetch from "./useAuthFetch";
import EditFood from "./editFood";
export default function Food({
  image,
  foodName,
  price,
  ingredients,
  color,
  foodId,
}: foodType) {
  const { data }: any = useFetch("food-category");

  return (
    <>
      <div
        className={`w-[240px] lg:w-[270px] lg:h-[280px] border-[#E4E4E7] bg-${color} border-[2px] rounded-lg `}
      >
        <div className="w-full h-[130px] lg:w-[240px] relative">
          <img src={image} className="w-full object-cover h-[130px] " />
          {/* <div className="flex justify-end items-end mt-2 > */}
          <EditFood
            food={{
              image,
              foodName,
              price,
              ingredients,
              color,
              foodId,
            }}
            data={data}
          />
          {/* </div> */}
        </div>

        <div>
          <div className="flex justify-between mt-3">
            <p className="text-[#EF4444]">{foodName}</p>
            <div className="text-[#09090B] ">{price}$</div>
          </div>
          <p>{ingredients.slice(0, 100)}</p>
        </div>
      </div>
    </>
  );
}
