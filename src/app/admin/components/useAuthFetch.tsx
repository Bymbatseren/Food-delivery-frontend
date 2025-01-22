"use client";
import { useAuth } from "@clerk/nextjs";
import { useState, useEffect } from "react";

export default function useFetch(path: string) {
  const [data, setData] = useState([]);
  async function getFetchData() {
    fetch(`http://localhost:4000/${path}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }
  useEffect(() => {
    getFetchData();
  }, []);
  return { data };
}
export function usePut({
  path,
  id,
  foodName,
  image,
  ingredients,
  categoryId,
  price,
}: any) {
  async function getFetchData() {
    const food: any = {
      foodName,
      price: Number(price),
      image,
      ingredients,
      category: categoryId,
    };
    fetch(`http://localhost:4000/${path}/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    });

    useEffect(() => {
      getFetchData();
    }, []);
  }
  return getFetchData;
}
