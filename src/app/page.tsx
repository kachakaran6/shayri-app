// app/page.tsx
"use client";

import { useState } from "react";
import { shayariList } from "../lib/shayari";
import ShayariCard from "@/components/ShayariCard";

// Optional: icon library

export default function HomePage() {
  const [index, setIndex] = useState(
    Math.floor(Math.random() * shayariList.length)
  );

  const shuffleShayari = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * shayariList.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-pink-200 transition-colors duration-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-700 "> Shayaris</h1>
      <ShayariCard text={shayariList[index].text} />

      <button
        onClick={shuffleShayari}
        className="mt-6 px-6 py-2 bg-sky-400 hover:bg-sky-600 text-white rounded-full transition"
      >
        Shuffle ✨
      </button>
    </main>
  );
}
