export default function Header() {
  return (
    <>
      <div className="bg-[#18181B] w-full h-[70px]">
        <div className="flex justify-between items-center pl-[5%] pr-[5%]">
          <div className="flex gap-2">
            <div className="flex justify-center items-center">
              <img src="./icon.png" className="w-[45px]"></img>
            </div>
            <div>
              <div className="flex">
                <p className="text-white font-[600] text-[20px]">Nom</p>
                <p className="text-[#EF4444] font-[600] text-[20px]">Nom</p>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-white text-[12px]">Swift delivery</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <button className="rounded-full flex justify-center items-center bg-[#F4F4F5]">
                <p className="pl-[12px] pr-[12px] pt-[8px] pb-[8px]">Sign up</p>
              </button>
            </div>
            <div>
              <button className="rounded-full flex justify-center items-center bg-[#EF4444]">
                <p className="pl-[12px] pr-[12px] pt-[8px] pb-[8px]">Log in</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
