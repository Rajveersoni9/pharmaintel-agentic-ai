import { useState } from 'react';
import { Search, Pill, Shield, Microscope, ArrowRight } from 'lucide-react';

interface HomeScreenProps {
  onSearch: (query: string) => void;
}

export function HomeScreen({ onSearch }: HomeScreenProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const quickPrompts = [
    {
      icon: <Pill className="w-10 h-10" />,
      text: "Repurposing opportunities for Metformin"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      text: "Patent risks for Drug Y"
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      text: "Clinical trials for Disease Z"
    }
  ];

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
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(91, 95, 227, 0.4) 0%, transparent 70%)',
            top: '15%',
            left: '5%',
            filter: 'blur(60px)'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(78, 159, 235, 0.3) 0%, transparent 70%)',
            bottom: '10%',
            left: '10%',
            filter: 'blur(80px)'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(63, 191, 219, 0.4) 0%, transparent 70%)',
            top: '30%',
            left: '8%',
            filter: 'blur(40px)'
          }}
        />
      </div>

      <div className="max-w-5xl w-full space-y-16 relative z-10">
        {/* Main Content Section */}
        <div className="text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl text-white tracking-tight" style={{ fontWeight: 300 }}>
              PharmaIntel Agentic Ai
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ fontWeight: 300 }}>
              Ask any complex pharma research question. Our AI agents will analyze clinical trials, patents, literature, and market data.
            </p>
          </div>
          
          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative max-w-3xl mx-auto">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-700 w-8 h-8" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter molecule or research query...."
                className="w-full bg-white/95 backdrop-blur-sm border-0 rounded-full pl-20 pr-8 py-6 text-gray-900 placeholder:text-gray-600 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                style={{ fontWeight: 400 }}
              />
            </div>
            
            {/* Run Analysis Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="mx-auto flex items-center gap-3 px-10 py-4 rounded-full text-white text-lg transition-all hover:scale-105 shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)',
                fontWeight: 500
              }}
            >
              Run Analysis
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Quick Prompts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => onSearch(prompt.text)}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 text-left transition-all hover:bg-white hover:scale-105 hover:shadow-xl shadow-md group"
            >
              <div className="flex items-start gap-4">
                <div className="text-gray-900 group-hover:scale-110 transition-transform">
                  {prompt.icon}
                </div>
                <p className="text-gray-900 text-base leading-relaxed pt-1" style={{ fontWeight: 400 }}>
                  {prompt.text}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
