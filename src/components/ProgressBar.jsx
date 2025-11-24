export default function ProgressBar({ progress }) {
  return (
    <div
      className="fixed top-0 left-0 right-0 h-px bg-stone/50 z-50"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Reading progress: ${Math.round(progress)}%`}
    >
      <div
        className="h-full bg-gradient-to-r from-aqua via-teal to-aqua/50 transition-all duration-700 ease-out"
        style={{ width: `${progress}%` }}
      />
      {/* Glow effect */}
      <div
        className="absolute top-0 h-4 bg-gradient-to-b from-aqua/20 to-transparent transition-all duration-700 ease-out blur-sm"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </div>
  );
}
