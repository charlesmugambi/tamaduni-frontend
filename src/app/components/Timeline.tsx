export interface TimelineProps {
    steps?: number;
    currentStep?: number;
  }
  export const Timeline: React.FC<TimelineProps> = ({ steps= 10, currentStep = 0 }) => {
    const dots = Array.from({ length: steps }, (_, i) => i);
    return (
      <div className="relative w-full px-4 py-6">
        <div className="h-1 bg-gray-300" />
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
          {dots.map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={`h-4 w-4 rounded-full transition-colors ${i <= currentStep ? 'bg-red-500' : 'bg-gray-400'}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };