import { ReactNode } from 'react';

interface QuickPromptCardProps {
  icon: ReactNode;
  text: string;
  onClick: () => void;
}

export function QuickPromptCard({ icon, text, onClick }: QuickPromptCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-card border border-pharma rounded-lg p-6 hover:border-primary hover:bg-card/80 transition-all duration-200 text-left group"
    >
      <div className="flex items-start gap-3">
        <div className="text-primary group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <p className="text-sm text-card-foreground">{text}</p>
      </div>
    </button>
  );
}
