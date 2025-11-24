import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

export default function HeroStat({ value, label, countUp, duration = 2000, prefix = '', suffix = '' }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Extract numeric value if present
  const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''));
  const hasNumeric = !isNaN(numericValue);

  return (
    <div ref={ref} className="space-y-6">
      {/* Decorative line above */}
      <div className="flex justify-center">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-aqua/40 to-transparent" />
      </div>

      <div className="hero-stat">
        {countUp && hasNumeric && shouldAnimate ? (
          <>
            <span className="text-aqua/80">{prefix}</span>
            <CountUp
              start={0}
              end={numericValue}
              duration={duration / 1000}
              separator=","
              decimals={value.toString().includes('.') ? 1 : 0}
            />
            <span className="text-mist">{value.toString().replace(/[0-9.,]/g, '')}</span>
            <span className="text-aqua/80">{suffix}</span>
          </>
        ) : (
          <span>{value}</span>
        )}
      </div>

      <p className="text-mist text-lg font-light tracking-wide max-w-lg mx-auto">{label}</p>

      {/* Decorative line below */}
      <div className="flex justify-center">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-stone to-transparent" />
      </div>
    </div>
  );
}
