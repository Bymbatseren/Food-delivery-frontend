export default function Navigation() {
  return (
    <>
      <div className="h-screen w-[10%] bg-white flex justify-center ">
        <div className="pt-10">
          <div className="flex gap-2 p">
            <div className="flex justify-center items-center">
              <img src="./icon.png" className="w-[45px]"></img>
            </div>
            <div>
              <div className="flex">
                <p className="text-black font-[600] text-[20px]">Nom</p>
                <p className="text-black font-[600] text-[20px]">Nom</p>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-[#71717A] text-[12px]">Swift delivery</p>
              </div>
            </div>
          </div>
          <div className="pt-[40px]">
            <button className="bg-[#18181B] text-white font-[500] text-[14px] rounded-full pt-[15px] pb-[15px] pl-[50px] pr-[30px] ">
              Food menu
            </button>
            <div className="pt-[24px]">
              <p className="text-[#09090B] font-[500] text-[14px]">Orders</p>
            </div>
            <div className="pt-[24px]">
              <p className="text-[#09090B] font-[500] text-[14px]">Settings</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
