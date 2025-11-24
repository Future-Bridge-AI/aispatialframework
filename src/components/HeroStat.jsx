import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

export default function HeroStat({ value, label, countUp = true, duration = 2000, prefix = '', suffix = '', sectionKey }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  // Reset animation when section changes
  useEffect(() => {
    setShouldAnimate(false);
    setHasAnimated(false);

    // Small delay to ensure reset before re-triggering
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [sectionKey]);

  useEffect(() => {
    if (shouldAnimate && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [shouldAnimate, hasAnimated]);

  // Extract numeric value if present
  const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''));
  const hasNumeric = !isNaN(numericValue);

  return (
    <div
      ref={ref}
      className="space-y-6"
      role="region"
      aria-label={`Statistic: ${value} - ${label}`}
    >
      {/* Decorative line above - animated */}
      <div className="flex justify-center overflow-hidden">
        <div
          className={`h-px bg-gradient-to-r from-transparent via-aqua/40 to-transparent transition-all duration-1000 ease-out ${
            shouldAnimate ? 'w-24 opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>

      <div className={`hero-stat transition-all duration-700 ${shouldAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {countUp && hasNumeric && shouldAnimate ? (
          <>
            <span className="text-aqua/80">{prefix}</span>
            <CountUp
              start={0}
              end={numericValue}
              duration={duration / 1000}
              separator=","
              decimals={value.toString().includes('.') ? 1 : 0}
              delay={0.2}
              useEasing={true}
              easingFn={(t, b, c, d) => {
                // Custom easing for more dramatic effect
                t /= d;
                return c * t * t * t + b;
              }}
            />
            <span className="text-mist">{value.toString().replace(/[0-9.,]/g, '')}</span>
            <span className="text-aqua/80">{suffix}</span>
          </>
        ) : (
          <span className={shouldAnimate ? 'animate-fade-in' : ''}>{value}</span>
        )}
      </div>

      <p
        className={`text-mist text-lg font-light tracking-wide max-w-lg mx-auto transition-all duration-700 delay-300 ${
          shouldAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        {label}
      </p>

      {/* Decorative line below - animated */}
      <div className="flex justify-center overflow-hidden">
        <div
          className={`h-px bg-gradient-to-r from-transparent via-stone to-transparent transition-all duration-1000 delay-500 ease-out ${
            shouldAnimate ? 'w-12 opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>
    </div>
  );
}
