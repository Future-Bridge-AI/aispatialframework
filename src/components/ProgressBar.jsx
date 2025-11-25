export default function ProgressBar({ progress }) {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/50 z-50">
      <div
        className="h-full transition-all duration-500 ease-out relative"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)',
          boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
        }}
      />
    </div>
  );
}
