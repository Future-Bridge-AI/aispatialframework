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
    <div ref={ref} className="space-y-3">
      <div className="hero-stat">
        {countUp && hasNumeric && shouldAnimate ? (
          <>
            {prefix}
            <CountUp
              start={0}
              end={numericValue}
              duration={duration / 1000}
              separator=","
              decimals={value.toString().includes('.') ? 1 : 0}
            />
            {value.toString().replace(/[0-9.,]/g, '')}
            {suffix}
          </>
        ) : (
          value
        )}
      </div>
      <p className="text-gray-600 text-lg">{label}</p>
    </div>
  );
}
