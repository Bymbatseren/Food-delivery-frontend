import { foodType } from "./types";
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
import useFetch from "./useAuthFetch";
import { usePut } from "./useAuthFetch";
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
        className={`lg:w-[270px] lg:h-[280px] border-[#E4E4E7] bg-${color} border-[2px] rounded-lg flex justify-center items-center`}
      >
        <div className=" lg:w-[240px]">
          <img src={image} className="w-[240px] h-[130px]"></img>
          <EditFood foodId={foodId} data={data} />
          <div className="flex justify-between">
            <p className="text-[#EF4444]">{foodName}</p>
            <div className="text-[#09090B] ">{price}$</div>
          </div>
          <p>{ingredients}</p>
        </div>
      </div>
    </>
  );
}
