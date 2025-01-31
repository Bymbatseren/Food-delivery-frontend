"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import FoodList from "./components/foodList"; // FoodList компонент
import Navigation from "./components/navigation";
import Modal from "./components/modal";
import AddDish from "./components/addDish";
import Link from "next/link";
import Food from "./components/food";
import { useUser } from "@clerk/nextjs";
import { useAuth } from "@clerk/clerk-react";

export default function Admin() {
  const { user, isLoaded } = useUser();

  const isAdmin = user?.publicMetadata.role === "admin";
  const [category, setCategories] = useState([]);
  const { getToken }: any = useAuth();

  async function Show() {
    const token = await getToken();
    const res = await fetch(`http://localhost:4000/food-category`, {
      headers: {
        authentication: token,
      },
    });
    const data = await res.json();
    setCategories(data);
    console.log(token);
  }

  useEffect(() => {
    Show();
  }, []);
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      {isAdmin ? (
        <div className="bg-[#f4f4f5] flex">
          <div>
            <div className="bg-white mx-5 my-[3%]">
              <p>Dishes Category</p>
              {category.map((category: any) => (
                <Link href={`admin/${category._id}`} key={category._id}>
                  <Badge className="bg-white text-black mr-2 cursor-pointer">
                    {category.categoryName}
                  </Badge>
                </Link>
              ))}
              <Modal />
            </div>
            <div className="ml-10">
              {category.map((category: any) => (
                <div key={category._id} className="mt-5">
                  <FoodList selectedCategory={category._id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        "error"
      )}
    </>
  );
}
