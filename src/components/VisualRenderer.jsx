import SplitComparison from './visuals/SplitComparison';
import ToggleComparison from './visuals/ToggleComparison';
import AnimatedLayers from './visuals/AnimatedLayers';
import CompressibleTimeline from './visuals/CompressibleTimeline';
import RadarWithCalc from './visuals/RadarWithCalc';

export default function VisualRenderer({ type, data, config }) {
  const components = {
    splitComparison: SplitComparison,
    toggleComparison: ToggleComparison,
    animatedLayers: AnimatedLayers,
    compressibleTimeline: CompressibleTimeline,
    radarWithCalc: RadarWithCalc,
  };

  const Component = components[type];

  if (!Component) {
    return (
      <div className="section-card text-center text-gray-500">
        Visual type "{type}" not implemented
      </div>
    );
  }

  return <Component data={data} config={config} />;
}
