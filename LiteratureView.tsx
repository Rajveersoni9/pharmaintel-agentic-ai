import { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { ArticleCard } from '../ArticleCard';
import { ScoreBar } from '../ScoreBar';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface LiteratureViewProps {
  onBack: () => void;
}

export function LiteratureView({ onBack }: LiteratureViewProps) {
  const [sortBy, setSortBy] = useState<string>('relevance');
  const [filterYear, setFilterYear] = useState<string>('all');

  const articles = [
    {
      title: 'Metformin and longevity: novel insights from preclinical models',
      journal: 'Nature Aging',
      year: 2023,
      conclusion: 'Metformin demonstrates significant life-extending effects through AMPK pathway activation.',
      relevanceScore: 95,
      citations: 142,
      impactFactor: 12.4
    },
    {
      title: 'Repurposing metformin for cancer prevention: meta-analysis',
      journal: 'Journal of Clinical Oncology',
      year: 2024,
      conclusion: 'Evidence suggests 30% reduction in cancer incidence among long-term metformin users.',
      relevanceScore: 89,
      citations: 87,
      impactFactor: 8.9
    },
    {
      title: 'Metformin in polycystic ovary syndrome: mechanisms and outcomes',
      journal: 'The Lancet Diabetes & Endocrinology',
      year: 2023,
      conclusion: 'Metformin improves metabolic and reproductive outcomes in PCOS through insulin sensitization.',
      relevanceScore: 86,
      citations: 156,
      impactFactor: 11.2
    },
    {
      title: 'Cardiovascular effects of metformin: beyond glucose control',
      journal: 'Circulation Research',
      year: 2024,
      conclusion: 'Metformin provides cardioprotection independent of its glucose-lowering effects.',
      relevanceScore: 82,
      citations: 64,
      impactFactor: 9.8
    },
    {
      title: 'Neuroprotective potential of metformin in Alzheimer\'s disease',
      journal: 'Neurology',
      year: 2023,
      conclusion: 'Metformin may reduce Alzheimer\'s risk through multiple neuroprotective mechanisms.',
      relevanceScore: 78,
      citations: 98,
      impactFactor: 7.5
    },
    {
      title: 'Metformin and gut microbiome: emerging connections',
      journal: 'Cell Metabolism',
      year: 2024,
      conclusion: 'Metformin\'s therapeutic effects may be partially mediated through gut microbiome modulation.',
      relevanceScore: 75,
      citations: 123,
      impactFactor: 15.3
    },
  ];

  // Keyword clusters data (bubble chart)
  const keywordClusters = [
    { keyword: 'AMPK', frequency: 340, relevance: 92, size: 340 },
    { keyword: 'Type 2 Diabetes', frequency: 520, relevance: 88, size: 520 },
    { keyword: 'Cancer Prevention', frequency: 210, relevance: 85, size: 210 },
    { keyword: 'PCOS', frequency: 180, relevance: 84, size: 180 },
    { keyword: 'Longevity', frequency: 150, relevance: 90, size: 150 },
    { keyword: 'Cardiovascular', frequency: 280, relevance: 79, size: 280 },
    { keyword: 'Insulin Resistance', frequency: 410, relevance: 86, size: 410 },
    { keyword: 'Mitochondria', frequency: 120, relevance: 81, size: 120 },
    { keyword: 'Inflammation', frequency: 195, relevance: 77, size: 195 },
    { keyword: 'Microbiome', frequency: 95, relevance: 75, size: 95 },
  ];

  const comparisonData = [
    { category: 'Clinical Efficacy', score: 88 },
    { category: 'Safety Profile', score: 95 },
    { category: 'Novel Applications', score: 72 },
    { category: 'Mechanistic Understanding', score: 84 },
  ];

  const COLORS = ['#16C2A5', '#F2C94C', '#9B59B6', '#3498DB', '#E74C3C'];

  return (
    <div 
      className="min-h-screen px-8 py-8 relative overflow-hidden"
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
      </div>

      <div className="max-w-[1600px] mx-auto space-y-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Results
          </button>
        </div>

        <div>
          <h1 className="text-white">Scientific Literature Analysis</h1>
          <p className="text-white/80 mt-2">
            Comprehensive review of 1,247 peer-reviewed publications
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex-1 relative min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="recent">Most Recent</option>
              <option value="citations">Most Cited</option>
              <option value="impact">Impact Factor</option>
            </select>

            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <option value="all">All Years</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="older">Older</option>
            </select>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-4">
            <div className="text-2xl text-white mb-1">1,247</div>
            <div className="text-sm text-white/70">Total Articles</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-4">
            <div className="text-2xl text-white mb-1">8.7</div>
            <div className="text-sm text-white/70">Avg Impact Factor</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-4">
            <div className="text-2xl text-white mb-1">24,891</div>
            <div className="text-sm text-white/70">Total Citations</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-4">
            <div className="text-2xl text-white mb-1">156</div>
            <div className="text-sm text-white/70">Recent (2024)</div>
          </div>
        </div>

        {/* Keyword Clusters */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-white mb-4">Key Research Topics (Bubble Size = Frequency)</h3>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
              <XAxis 
                type="number" 
                dataKey="frequency" 
                name="Frequency" 
                stroke="#FFFFFF"
                label={{ value: 'Frequency in Literature', position: 'insideBottom', offset: -10, fill: '#FFFFFF' }}
              />
              <YAxis 
                type="number" 
                dataKey="relevance" 
                name="Relevance" 
                stroke="#FFFFFF"
                label={{ value: 'Relevance Score', angle: -90, position: 'insideLeft', fill: '#FFFFFF' }}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: '#FFFFFF'
                }}
                formatter={(value: any, name: string, props: any) => {
                  if (name === 'size') return null;
                  return [value, name === 'frequency' ? 'Frequency' : 'Relevance'];
                }}
                labelFormatter={(value, payload) => {
                  if (payload && payload[0]) {
                    return payload[0].payload.keyword;
                  }
                  return '';
                }}
              />
              <Scatter data={keywordClusters} fill="#16C2A5">
                {keywordClusters.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-4">
            {keywordClusters.slice(0, 5).map((keyword, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className="inline-block w-3 h-3 rounded-full mr-1" 
                  style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                />
                <span className="text-xs text-white/70">{keyword.keyword}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Article List with Relevance */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-white mb-4">Top Publications</h3>
          <div className="space-y-3">
            {articles.map((article, idx) => (
              <div key={idx} className="border-b border-white/10 last:border-0 pb-3 last:pb-0">
                <ArticleCard {...article} />
                <div className="mt-2 flex items-center gap-4 text-xs text-white/70 pl-4">
                  <span>Citations: {article.citations}</span>
                  <span>•</span>
                  <span>Impact Factor: {article.impactFactor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence Strength Comparison */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-white mb-4">Literature Evidence Strength</h3>
          <div className="space-y-4">
            {comparisonData.map((item, idx) => (
              <ScoreBar 
                key={idx} 
                label={item.category} 
                score={item.score} 
                color={COLORS[idx % COLORS.length]} 
              />
            ))}
          </div>
          <p className="text-sm text-white/80 mt-4">
            Evidence strength is calculated based on publication quality, citation impact, study design, 
            and consistency across multiple independent research groups.
          </p>
        </div>

        {/* Article Comparison Table */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-white mb-4">Quick Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 text-sm text-white/70">Study Focus</th>
                  <th className="text-left py-3 px-4 text-sm text-white/70">Key Finding</th>
                  <th className="text-left py-3 px-4 text-sm text-white/70">Year</th>
                  <th className="text-left py-3 px-4 text-sm text-white/70">Journal</th>
                  <th className="text-left py-3 px-4 text-sm text-white/70">Relevance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-sm text-white">Longevity</td>
                  <td className="py-3 px-4 text-sm text-white/80">Life extension via AMPK</td>
                  <td className="py-3 px-4 text-sm text-white">2023</td>
                  <td className="py-3 px-4 text-sm text-white/80">Nature Aging</td>
                  <td className="py-3 px-4 text-sm"><span className="text-[#16C2A5]">95%</span></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-sm text-white">Cancer Prevention</td>
                  <td className="py-3 px-4 text-sm text-white/80">30% risk reduction</td>
                  <td className="py-3 px-4 text-sm text-white">2024</td>
                  <td className="py-3 px-4 text-sm text-white/80">JCO</td>
                  <td className="py-3 px-4 text-sm"><span className="text-[#16C2A5]">89%</span></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-sm text-white">PCOS</td>
                  <td className="py-3 px-4 text-sm text-white/80">Improved metabolic outcomes</td>
                  <td className="py-3 px-4 text-sm text-white">2023</td>
                  <td className="py-3 px-4 text-sm text-white/80">Lancet D&E</td>
                  <td className="py-3 px-4 text-sm"><span className="text-[#16C2A5]">86%</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-white">Cardiovascular</td>
                  <td className="py-3 px-4 text-sm text-white/80">Independent cardioprotection</td>
                  <td className="py-3 px-4 text-sm text-white">2024</td>
                  <td className="py-3 px-4 text-sm text-white/80">Circ Res</td>
                  <td className="py-3 px-4 text-sm"><span className="text-[#16C2A5]">82%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}