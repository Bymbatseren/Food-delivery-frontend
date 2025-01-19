export default function Footer() {
  return (
    <>
      <div className="w-full h-[750px] bg-[#18181B] bottom-0">
        <div className="w-full h-[100px] bg-[#EF4444] mt-[60px]"></div>
        <div className="w-full flex items-center justify-center ">
          <div className="flex mt-[75px] ">
            <div>
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
            <div className="flex gap-[500px] ml-[300px]">
              <ul className="text-white">
                <li>NomNom</li>
                <li className="mt-3 text-[16px]">Home</li>
                <li className="mt-3 text-[16px]">Contact us</li>
                <li className="mt-3 text-[16px]">Delivery zone</li>
              </ul>
              <div className="flex gap-[150px]">
                <ul className="text-white">
                  <li>Menu</li>
                  <li className="mt-3 text-[16px]">Appetizers</li>
                  <li className="mt-3 text-[16px]">Salads</li>
                  <li className="mt-3 text-[16px]">Pizzas</li>
                  <li className="mt-3 text-[16px]">Lunch favorites</li>
                  <li className="mt-3 text-[16px]">Main dishes</li>
                </ul>
                <ul className="text-white">
                  <li>Menu</li>
                  <li className="mt-3 text-[16px]">Side dish</li>
                  <li className="mt-3 text-[16px]">Brunch</li>
                  <li className="mt-3 text-[16px]">Desserts</li>
                  <li className="mt-3 text-[16px]">Beverages</li>
                  <li className="mt-3 text-[16px]">Fish & Sea foods</li>
                </ul>
              </div>
              <div>
                <p className="text-white">FOLLOW US</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
