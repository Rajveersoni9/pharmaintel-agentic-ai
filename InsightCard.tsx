import { ReactNode } from 'react';

interface InsightCardProps {
  icon: ReactNode;
  title: string;
  insights: string[];
  link?: string;
}

export function InsightCard({ icon, title, insights, link }: InsightCardProps) {
  return (
    <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:border-white/40 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-white">
          {icon}
        </div>
        <h3 className="text-white">{title}</h3>
      </div>
      <ul className="space-y-2 mb-4">
        {insights.map((insight, idx) => (
          <li key={idx} className="text-sm text-white/80 flex items-start gap-2">
            <span className="text-white mt-1">•</span>
            <span>{insight}</span>
          </li>
        ))}
      </ul>
      {link && (
        <button className="text-sm text-white/90 hover:text-white hover:underline">
          View Details →
        </button>
      )}
    </div>
  );
}