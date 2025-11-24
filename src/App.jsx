import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import SectionViewer from './components/SectionViewer';
import ProgressBar from './components/ProgressBar';
import { sections } from './data/sections';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [viewedSections, setViewedSections] = useState(new Set([0]));
  const [tldrMode, setTldrMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setViewedSections(prev => new Set([...prev, currentSection]));
  }, [currentSection]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSectionChange = (index) => {
    setCurrentSection(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} h-screen overflow-hidden bg-void`}>
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Sidebar */}
      {isMobile ? (
        <select
          value={currentSection}
          onChange={(e) => handleSectionChange(Number(e.target.value))}
          className="w-full p-4 border-b border-stone bg-deep text-bone focus:outline-none focus:ring-2 focus:ring-aqua focus:ring-inset"
          aria-label="Select section"
        >
          {sections.map((section, index) => (
            <option key={section.id} value={index}>
              {index + 1}. {section.navLabel}
            </option>
          ))}
        </select>
      ) : (
        <Sidebar
          sections={sections}
          currentSection={currentSection}
          viewedSections={viewedSections}
          onSectionChange={handleSectionChange}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto contour-bg">
        <ProgressBar progress={progress} />

        {/* Header */}
        <header className="bg-deep/90 backdrop-blur-md border-b border-stone/30 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
            <div>
              <div className="accent-line mb-3" />
              <h1 className="text-2xl font-light tracking-wide text-bone">
                WA's AI-Ready Spatial Framework
              </h1>
              <p className="text-sm text-mist mt-1 tracking-widest uppercase">
                An Interactive Story
              </p>
            </div>
            <button
              onClick={() => setTldrMode(!tldrMode)}
              className="px-5 py-2.5 text-sm font-medium text-mist hover:text-aqua
                       border border-stone hover:border-aqua/50 transition-all duration-300
                       tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-deep"
              aria-pressed={tldrMode}
              aria-label={tldrMode ? 'Switch to full story view' : 'Switch to summary view'}
            >
              {tldrMode ? 'Full Story' : 'TL;DR'}
            </button>
          </div>
        </header>

        {/* Section Content */}
        <main id="main-content" className="max-w-5xl mx-auto px-8 py-16 relative z-10" tabIndex="-1">
          <SectionViewer
            section={sections[currentSection]}
            sectionIndex={currentSection}
            tldrMode={tldrMode}
          />

          {/* Navigation Buttons */}
          <nav className="flex items-center justify-between mt-20 pt-10 border-t border-stone/30" aria-label="Section navigation">
            <button
              onClick={() => handleSectionChange(Math.max(0, currentSection - 1))}
              disabled={currentSection === 0}
              className="group px-6 py-3 text-mist font-light tracking-wide
                       border border-stone hover:border-aqua/50 hover:text-aqua
                       transition-all duration-300
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-void
                       disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-stone disabled:hover:text-mist"
              aria-label={`Go to previous section${currentSection > 0 ? `: ${sections[currentSection - 1].navLabel}` : ''}`}
            >
              <span className="inline-block transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
              <span className="ml-2">Previous</span>
            </button>

            <div className="text-center" aria-live="polite" aria-atomic="true">
              <span className="sr-only">Section </span>
              <span className="text-5xl font-light text-bone">{String(currentSection + 1).padStart(2, '0')}</span>
              <span className="text-mist mx-2" aria-hidden="true">/</span>
              <span className="sr-only"> of </span>
              <span className="text-mist">{String(sections.length).padStart(2, '0')}</span>
            </div>

            <button
              onClick={() => handleSectionChange(Math.min(sections.length - 1, currentSection + 1))}
              disabled={currentSection === sections.length - 1}
              className="group px-6 py-3 text-bone font-light tracking-wide
                       border border-aqua/30 hover:border-aqua hover:bg-aqua/10
                       transition-all duration-300
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-void
                       disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-aqua/30 disabled:hover:bg-transparent"
              aria-label={`Go to next section${currentSection < sections.length - 1 ? `: ${sections[currentSection + 1].navLabel}` : ''}`}
            >
              <span className="mr-2">Next</span>
              <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </button>
          </nav>
        </main>

        {/* Footer accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-aqua/20 to-transparent" />
      </div>
    </div>
  );
}

export default App;
