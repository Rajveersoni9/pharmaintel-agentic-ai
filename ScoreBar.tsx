interface ScoreBarProps {
  label: string;
  score: number;
  color?: string;
}

export function ScoreBar({ label, score, color = '#16C2A5' }: ScoreBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white">{label}</span>
        <span className="text-sm text-white">{score}</span>
      </div>
      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${score}%`,
            backgroundColor: color
          }}
        />
      </div>
    </div>
  );
}