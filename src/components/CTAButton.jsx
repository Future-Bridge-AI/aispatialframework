export default function CTAButton({ text, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`cta-button ${isActive ? 'border-aqua text-aqua' : ''}`}
    >
      <span className="tracking-wider">{text}</span>
      <span className={`transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`}>
        ↓
      </span>
    </button>
  );
}
