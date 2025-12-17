import { useEffect, useState } from 'react';
import { Brain, Beaker, Shield, BookOpen, Sparkles } from 'lucide-react';

interface ProcessingScreenProps {
  onComplete: () => void;
}

interface AgentStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: number;
}

export function ProcessingScreen({ onComplete }: ProcessingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: AgentStep[] = [
    {
      icon: <Brain className="w-20 h-20" />,
      title: "Master Agent",
      description: "Understanding query and orchestrating analysis",
      duration: 2000
    },
    {
      icon: <Beaker className="w-20 h-20" />,
      title: "Clinical Trials Agent",
      description: "Fetching and analyzing clinical trial data",
      duration: 2500
    },
    {
      icon: <Shield className="w-20 h-20" />,
      title: "Patent Agent",
      description: "Analyzing IP landscape and patent risks",
      duration: 2200
    },
    {
      icon: <BookOpen className="w-20 h-20" />,
      title: "Literature Agent",
      description: "Summarizing scientific evidence",
      duration: 2500
    },
    {
      icon: <Sparkles className="w-20 h-20" />,
      title: "Synthesis Engine",
      description: "Generating comprehensive analysis and scores",
      duration: 2000
    }
  ];

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, steps[currentStep].duration);

      return () => clearTimeout(timer);
    } else if (currentStep === steps.length) {
      const finalTimer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(finalTimer);
    }
  }, [currentStep, onComplete]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-8 py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #5B5FE3 0%, #4E9FEB 35%, #3FBFDB 65%, #2DD4BF 100%)'
      }}
    >
      {/* Decorative background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(91, 95, 227, 0.3) 0%, transparent 70%)',
            top: '15%',
            left: '5%',
            filter: 'blur(60px)',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(78, 159, 235, 0.25) 0%, transparent 70%)',
            bottom: '20%',
            left: '8%',
            filter: 'blur(50px)',
            animation: 'float 8s ease-in-out infinite 1s'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(63, 191, 219, 0.3) 0%, transparent 70%)',
            top: '40%',
            left: '10%',
            filter: 'blur(40px)',
            animation: 'float 7s ease-in-out infinite 2s'
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(45, 212, 191, 0.25) 0%, transparent 70%)',
            bottom: '30%',
            left: '3%',
            filter: 'blur(55px)',
            animation: 'float 9s ease-in-out infinite 3s'
          }}
        />
      </div>

      {/* Agent Card */}
      <div className="max-w-3xl w-full relative z-10">
        {currentStep < steps.length && (
          <div
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl"
            style={{
              animation: 'slideIn 0.6s ease-out'
            }}
          >
            <div className="flex items-center gap-8">
              {/* Icon */}
              <div className="shrink-0 text-black relative">
                {steps[currentStep].icon}
                
                {/* Animated ring around icon */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '3px solid rgba(99, 102, 241, 0.3)',
                    animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h2 className="text-4xl text-black mb-3" style={{ fontWeight: 600 }}>
                  {steps[currentStep].title}
                </h2>
                <p className="text-xl text-gray-700" style={{ fontWeight: 400 }}>
                  {steps[currentStep].description}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all"
                style={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                  background: 'linear-gradient(90deg, #6366F1 0%, #3B82F6 100%)',
                  animation: 'shimmer 1.5s ease-in-out infinite'
                }}
              />
            </div>

            {/* Step indicator */}
            <div className="mt-4 text-center text-gray-600 text-sm" style={{ fontWeight: 500 }}>
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>
        )}

        {/* Loading dots below card */}
        {currentStep < steps.length && (
          <div className="flex justify-center gap-2 mt-8">
            <div 
              className="w-3 h-3 rounded-full bg-white/60"
              style={{ animation: 'bounce 1.4s ease-in-out infinite' }}
            />
            <div 
              className="w-3 h-3 rounded-full bg-white/60"
              style={{ animation: 'bounce 1.4s ease-in-out infinite 0.2s' }}
            />
            <div 
              className="w-3 h-3 rounded-full bg-white/60"
              style={{ animation: 'bounce 1.4s ease-in-out infinite 0.4s' }}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
