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
    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} h-screen overflow-hidden bg-simpsons-sky-light`}>
      {/* Sidebar */}
      {isMobile ? (
        <select
          value={currentSection}
          onChange={(e) => handleSectionChange(Number(e.target.value))}
          className="w-full p-4 border-b-4 border-simpsons-yellow bg-white font-bold text-gray-900"
        >
          {sections.map((section, index) => (
            <option key={section.id} value={index}>
              🍩 {index + 1}. {section.navLabel}
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
      <div className="flex-1 overflow-y-auto">
        <ProgressBar progress={progress} />

        {/* Header */}
        <header className="bg-gradient-to-r from-simpsons-yellow via-simpsons-yellow-light to-simpsons-yellow border-b-4 border-simpsons-orange sticky top-0 z-10 shadow-cartoon">
          <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🍩</span>
              <div>
                <h1 className="text-2xl font-bold text-simpsons-blue-dark">
                  Springfield's AI-Ready Spatial Framework
                </h1>
                <p className="text-sm text-simpsons-brown font-medium">
                  A 10-minute interactive story (Excellent...)
                </p>
              </div>
            </div>
            <button
              onClick={() => setTldrMode(!tldrMode)}
              className="px-4 py-2 text-sm font-bold text-simpsons-blue-dark hover:text-simpsons-orange
                       border-2 border-simpsons-blue rounded-xl hover:border-simpsons-orange transition-all
                       bg-white hover:bg-simpsons-yellow-light shadow-cartoon"
            >
              {tldrMode ? '📺 Full Story' : '⚡ TL;DR Mode'}
            </button>
          </div>
        </header>

        {/* Section Content */}
        <main className="max-w-5xl mx-auto px-8 py-12">
          <SectionViewer
            section={sections[currentSection]}
            sectionIndex={currentSection}
            tldrMode={tldrMode}
          />

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t-2 border-simpsons-yellow/50">
            <button
              onClick={() => handleSectionChange(Math.max(0, currentSection - 1))}
              disabled={currentSection === 0}
              className="px-6 py-3 text-simpsons-blue font-bold rounded-xl border-2 border-simpsons-sky
                       hover:border-simpsons-yellow hover:bg-simpsons-yellow-light transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-simpsons-sky
                       bg-white shadow-cartoon"
            >
              ← Previous
            </button>

            <span className="text-sm font-bold text-simpsons-blue bg-white px-4 py-2 rounded-xl border-2 border-simpsons-sky">
              🍩 Section {currentSection + 1} of {sections.length}
            </span>

            <button
              onClick={() => handleSectionChange(Math.min(sections.length - 1, currentSection + 1))}
              disabled={currentSection === sections.length - 1}
              className="px-6 py-3 bg-simpsons-yellow text-simpsons-blue-dark font-bold rounded-xl
                       hover:bg-simpsons-orange hover:text-white transition-all shadow-cartoon-lg
                       border-2 border-simpsons-orange/50
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-simpsons-yellow"
            >
              Next →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
