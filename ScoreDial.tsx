interface ScoreDialProps {
  score: number;
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

export function ScoreDial({ score, label, size = 'md' }: ScoreDialProps) {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-40 h-40'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`flex flex-col items-center gap-2`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <svg className="transform -rotate-90 w-full h-full">
          {/* Background circle */}
          <circle
            cx="50%"
            cy="50%"
            r="45"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50%"
            cy="50%"
            r="45"
            stroke="#16C2A5"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`${textSizeClasses[size]} text-[#16C2A5]`}>{score}</span>
        </div>
      </div>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
