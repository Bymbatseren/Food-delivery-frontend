"use client";
import { AnyARecord } from "dns";
import { useState } from "react";
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
export default function Modal() {
  async function Create(name: string) {
    await fetch(`http://localhost:4000/food-category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    setInputValue("");
  }

  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="bg-[#EF4444] rounded-full w-9 h-9 flex justify-center items-center">
            +
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add new category</AlertDialogTitle>
            <AlertDialogDescription>
              <input
                placeholder="Type category name ..."
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              ></input>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => Create(inputValue)}
              disabled={!inputValue}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
