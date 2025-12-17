interface ArticleCardProps {
  title: string;
  journal: string;
  year: number;
  conclusion: string;
  relevanceScore?: number;
}

export function ArticleCard({ title, journal, year, conclusion, relevanceScore }: ArticleCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:border-white/40 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h4 className="text-white flex-1">{title}</h4>
        {relevanceScore !== undefined && (
          <span className="text-xs px-2 py-1 rounded bg-white/20 text-white shrink-0">
            {relevanceScore}% match
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 text-xs text-white/70 mb-3">
        <span>{journal}</span>
        <span>•</span>
        <span>{year}</span>
      </div>
      <p className="text-sm text-white/80">{conclusion}</p>
    </div>
  );
}