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
    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} h-screen overflow-hidden bg-gray-50`}>
      {/* Sidebar */}
      {isMobile ? (
        <select
          value={currentSection}
          onChange={(e) => handleSectionChange(Number(e.target.value))}
          className="w-full p-4 border-b border-gray-200 bg-white"
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
      <div className="flex-1 overflow-y-auto">
        <ProgressBar progress={progress} />

        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-wa-navy">
                Springfield's AI-Ready Spatial Framework
              </h1>
              <p className="text-sm text-gray-600">
                A 10-minute interactive story (Excellent...)
              </p>
            </div>
            <button
              onClick={() => setTldrMode(!tldrMode)}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-wa-blue
                       border border-gray-300 rounded-lg hover:border-wa-blue transition-all"
            >
              {tldrMode ? 'Full Story' : 'TL;DR Mode'}
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
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={() => handleSectionChange(Math.max(0, currentSection - 1))}
              disabled={currentSection === 0}
              className="px-6 py-3 text-gray-700 font-medium rounded-lg border border-gray-300
                       hover:border-wa-blue hover:text-wa-blue transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-300"
            >
              ← Previous
            </button>

            <span className="text-sm text-gray-500">
              Section {currentSection + 1} of {sections.length}
            </span>

            <button
              onClick={() => handleSectionChange(Math.min(sections.length - 1, currentSection + 1))}
              disabled={currentSection === sections.length - 1}
              className="px-6 py-3 bg-wa-blue text-white font-medium rounded-lg
                       hover:bg-wa-navy transition-all hover:shadow-lg
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-wa-blue"
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
