import { useState, useEffect } from 'react';

interface CardDonateResumeProps {
  title: string;
  value: string;
}

export function CardDonateResume({ title, value }: CardDonateResumeProps) {
  const [count, setCount] = useState(0);
  const finalValue = parseFloat(value.replace(/,/g, ''));

  useEffect(() => {
    const duration = 3000;
    const steps = 60;
    const increment = finalValue / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= finalValue) {
        setCount(finalValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [finalValue]);

  return (
    <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 w-full sm:w-64 md:w-72 lg:w-80 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-300/20">
      <div className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-extrabold text-amber-900 tracking-tight">
          {title}
        </h2>
        <div className="bg-white/50 backdrop-blur-sm rounded-xl py-4 px-3">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 tracking-tight">
            R${count.toLocaleString('pt-BR', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}
          </p>
        </div>
      </div>
    </div>
  );
}