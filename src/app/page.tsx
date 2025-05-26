"use client";

import { useEffect, useState } from "react";
import { shayariList } from "../lib/shayari";
import ShayariCard from "@/components/ShayariCard";

function shuffleArray(array: number[]) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function HomePage() {
  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const initialIndices = shuffleArray(shayariList.map((_, i) => i));
    setShuffledIndices(initialIndices);
    setCurrentIdx(0);
  }, []);

  const shuffleShayari = () => {
    if (currentIdx >= shuffledIndices.length - 1) {
      const reshuffled = shuffleArray(shayariList.map((_, i) => i));
      setShuffledIndices(reshuffled);
      setCurrentIdx(0);
    } else {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-pink-200 transition-colors duration-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-700">Shayaris</h1>
      {shuffledIndices.length > 0 && (
        <ShayariCard text={shayariList[shuffledIndices[currentIdx]].text} />
      )}
      <button
        onClick={shuffleShayari}
        className="mt-6 px-6 py-2 bg-sky-400 hover:bg-sky-600 text-white rounded-full transition"
      >
        Next ✨
      </button>
    </main>
  );
}
