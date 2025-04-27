interface CardDonateResumeProps {
  title: string;
  value: string;
}

export function CardDonateResume({ title, value }: CardDonateResumeProps) {
  return (
    <div className="bg-gray-200 rounded-xl p-4 md:p-5 w-full sm:w-64 md:w-72 lg:w-80 text-center shadow-md hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl sm:text-2xl font-bold text-amber-900">{title}</h2>
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-400">R${value}</p>
    </div>
  );
}