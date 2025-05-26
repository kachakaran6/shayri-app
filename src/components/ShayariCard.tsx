import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
const dancing = Dancing_Script({ subsets: ["latin"], weight: "400" });
import { Feather } from "lucide-react"; // Example icon

type ShayariCardProps = {
  text: string;
  customTextClass?: string;
};

export default function ShayariCard({ text }: ShayariCardProps) {
  const formattedText = text.split(",").map((line, index) => (
    <span key={index} className="block my-2 text-center">
      {line.trim()}
      <br />
    </span>
  ));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-white/80 dark:bg-gray-900/70 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-sm max-w-xl w-full"
    >
      <div className="absolute top-4 left-4 text-5xl text-pink-400 font-serif select-none">
        “
      </div>

      <Feather className="absolute top-2 right-2 text-pink-300 opacity-20" />

      <p
        className={`${dancing.className}text-2xl sm:text-3xl font-serif text-center text-gray-800 dark:text-gray-100 italic leading-relaxed z-10`}
      >
        {formattedText}
      </p>

      <div className="absolute bottom-4 right-4 text-5xl text-pink-400 font-serif select-none rotate-180">
        “
      </div>
    </motion.div>
  );
}
