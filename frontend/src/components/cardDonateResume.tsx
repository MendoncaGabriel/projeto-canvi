interface CardDonateResumeProps {
  title: string;
  value: string;
}

export function CardDonateResume({ title, value }: CardDonateResumeProps) {
  return (
    <div className="bg-gray-200 rounded-xl p-5 w-80 text-center">
      <h2 className="text-2xl font-bold text-amber-900">{title}</h2>
      <p className="text-2xl font-bold text-orange-400">R${value}</p>
    </div>
  );
}