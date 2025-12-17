import { User } from 'lucide-react';
import logoImage from 'figma:asset/ed544b3378a29322192b386aee88b35f5157dd5f.png';

interface NavigationProps {
  onNavigate?: (page: string) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav 
      className="px-8 py-4"
      style={{
        background: 'linear-gradient(135deg, #5B5FE3 0%, #4E9FEB 35%, #3FBFDB 65%, #2DD4BF 100%)'
      }}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <button 
          onClick={() => onNavigate?.('home')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img 
            src={logoImage} 
            alt="PharmaIntel Logo" 
            className="w-12 h-12 rounded-full"
          />
          <span className="text-2xl text-white" style={{ fontWeight: 300 }}>
            PharmaIntel Agentic Ai
          </span>
        </button>
        
        <div className="flex items-center gap-8">
          <button className="text-white text-lg hover:text-white/80 transition-colors" style={{ fontWeight: 300 }}>
            Docs
          </button>
          <button className="text-white text-lg hover:text-white/80 transition-colors" style={{ fontWeight: 300 }}>
            About Us
          </button>
          <button className="w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-colors flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}