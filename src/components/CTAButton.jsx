export default function CTAButton({ text, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`cta-button ${isActive ? 'bg-wa-navy' : ''}`}
    >
      <span>{text}</span>
      <span className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>
  );
}
