// components/ShayariCard.tsx

type ShayariCardProps = {
  text: string;
};

export default function ShayariCard({ text }: ShayariCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-xl rounded-2xl p-6 max-w-xl mx-auto text-center transition-all duration-500 ease-in-out">
      <p className="text-xl font-serif text-gray-800 dark:text-gray-100 italic">
        {text}
      </p>
    </div>
  );
}
