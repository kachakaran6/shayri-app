type ShayariCardProps = {
  text: string;
};

export default function ShayariCard({ text }: ShayariCardProps) {
  const formattedText = text.split(",").map((line, index) => (
    <span key={index}>
      {line.trim()}
      <br />
    </span>
  ));

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      <p className="text-xl font-serif text-gray-800 dark:text-gray-100 italic">
        {formattedText}
      </p>
    </div>
  );
}
