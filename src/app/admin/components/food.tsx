import { foodType } from "./types"
export default function Food({ image, foodName, price, ingredients ,color}: foodType) {

    return <>
    <div className={`lg:w-[270px] lg:h-[280px] border-[#E4E4E7] bg-${color} border-[2px] rounded-lg flex justify-center items-center`}>
        <div className=" lg:w-[240px]">
            <img src={image} width={240} height={130}></img>
            <div className="flex justify-between">
                <p className="text-[#EF4444]">{foodName}</p>
                <div className="text-[#09090B] ">{price}$</div>
            </div>
            <p>{ingredients}</p>
        </div>
    </div>
    </>
}