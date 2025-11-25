export default function ProgressBar({ progress }) {
  return (
    <div className="fixed top-0 left-0 right-0 h-2 bg-simpsons-sky-light z-50 border-b border-simpsons-yellow/30">
      <div
        className="h-full bg-gradient-to-r from-simpsons-yellow via-simpsons-orange to-simpsons-yellow transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
      {/* Donut indicator at progress point */}
      <div
        className="absolute top-0 -translate-x-1/2 text-lg transition-all duration-500"
        style={{ left: `${progress}%` }}
      >
        🍩
      </div>
    </div>
  );
}
