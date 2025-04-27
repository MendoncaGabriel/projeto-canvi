import { useState, useEffect } from 'react';

interface CardDonateResumeProps {
  title: string;
  value: string;
}

export function CardDonateResume({ title, value }: CardDonateResumeProps) {
  const [count, setCount] = useState(0);
  const finalValue = parseFloat(value.replace(/,/g, ''));

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 60; // 60 steps for smooth animation
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
    <div className="bg-gray-200 rounded-xl p-4 md:p-5 w-full sm:w-64 md:w-72 lg:w-80 text-center shadow-md hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl sm:text-2xl font-bold text-amber-900">{title}</h2>
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-400">
        R${count.toLocaleString('pt-BR', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}
      </p>
    </div>
  );
}