interface StatusBadgeProps {
  status: string;
  type?: 'phase' | 'status' | 'feasibility';
}

export function StatusBadge({ status, type = 'status' }: StatusBadgeProps) {
  const getColors = () => {
    if (type === 'phase') {
      const phaseColors: Record<string, string> = {
        'Phase 1': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        'Phase 2': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
        'Phase 3': 'bg-teal-500/20 text-teal-400 border-teal-500/30',
        'Phase 4': 'bg-green-500/20 text-green-400 border-green-500/30',
      };
      return phaseColors[status] || 'bg-muted/20 text-muted-foreground border-muted';
    }
    
    if (type === 'feasibility') {
      const feasibilityColors: Record<string, string> = {
        'High': 'bg-[#16C2A5]/20 text-[#16C2A5] border-[#16C2A5]/30',
        'Medium': 'bg-[#F2C94C]/20 text-[#F2C94C] border-[#F2C94C]/30',
        'Low': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      };
      return feasibilityColors[status] || 'bg-muted/20 text-muted-foreground border-muted';
    }
    
    const statusColors: Record<string, string> = {
      'Active': 'bg-[#16C2A5]/20 text-[#16C2A5] border-[#16C2A5]/30',
      'Recruiting': 'bg-[#16C2A5]/20 text-[#16C2A5] border-[#16C2A5]/30',
      'Completed': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Terminated': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Withdrawn': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    };
    return statusColors[status] || 'bg-muted/20 text-muted-foreground border-muted';
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded border text-xs ${getColors()}`}>
      {status}
    </span>
  );
}
