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

export function updateRequest({ path, id, item }: any) {
  fetch(`http://localhost:4000/${path}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}
