import { ScoreDial } from '../ScoreDial';
import { InsightCard } from '../InsightCard';
import { DataTable } from '../DataTable';
import { StatusBadge } from '../StatusBadge';
import { ScoreBar } from '../ScoreBar';
import { ArticleCard } from '../ArticleCard';
import { Beaker, Shield, BookOpen, Calendar, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

interface ResultsDashboardProps {
  query: string;
  onViewDetails: (section: string) => void;
}

export function ResultsDashboard({ query, onViewDetails }: ResultsDashboardProps) {
  // Mock data
  const clinicalTrials = [
    { id: 'NCT04567890', phase: 'Phase 3', status: 'Active', title: 'Metformin for Type 2 Diabetes Prevention' },
    { id: 'NCT04567891', phase: 'Phase 2', status: 'Recruiting', title: 'Metformin in Polycystic Ovary Syndrome' },
    { id: 'NCT04567892', phase: 'Phase 4', status: 'Completed', title: 'Long-term Safety of Metformin' },
    { id: 'NCT04567893', phase: 'Phase 2', status: 'Active', title: 'Metformin for Cancer Prevention' },
  ];

  const radarData = [
    { category: 'Clinical Signal', score: 82, fullMark: 100 },
    { category: 'Patent Clearance', score: 91, fullMark: 100 },
    { category: 'Literature', score: 88, fullMark: 100 },
    { category: 'Market Potential', score: 75, fullMark: 100 },
    { category: 'Safety Profile', score: 95, fullMark: 100 },
  ];

  const phaseData = [
    { phase: 'Phase 1', count: 12 },
    { phase: 'Phase 2', count: 24 },
    { phase: 'Phase 3', count: 18 },
    { phase: 'Phase 4', count: 8 },
  ];

  const patentTimeline = [
    { year: 2025, count: 3, label: 'Expiring Soon' },
    { year: 2027, count: 5, label: 'Mid-term' },
    { year: 2030, count: 2, label: 'Long-term' },
  ];

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

      <div className="max-w-[1600px] mx-auto space-y-8 relative z-10">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm text-white/80">
            <span>Results for:</span>
            <span className="text-white">{query}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <ScoreDial score={85} label="Opportunity Score" size="lg" />
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-white/80">Feasibility: </span>
                  <StatusBadge status="High" type="feasibility" />
                </div>
                <div>
                  <span className="text-sm text-white/80">Confidence: </span>
                  <span className="text-white">94%</span>
                </div>
              </div>
            </div>
            
            {/* Notification Banner */}
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2">
              <span className="text-sm text-white">✓ Analysis completed successfully</span>
            </div>
          </div>
        </div>

        {/* Section A - Key Insight Cards */}
        <div>
          <h2 className="mb-4 text-white">Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InsightCard
              icon={<Beaker className="w-6 h-6" />}
              title="Clinical Evidence"
              insights={[
                "62 active clinical trials identified",
                "Strong efficacy in diabetes prevention",
                "Emerging data for PCOS treatment"
              ]}
              link="clinical"
            />
            <InsightCard
              icon={<Shield className="w-6 h-6" />}
              title="Patent Landscape"
              insights={[
                "Original patents expired (low risk)",
                "10 related formulation patents",
                "Clear path for generic development"
              ]}
              link="patents"
            />
            <InsightCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Literature Summary"
              insights={[
                "1,247 relevant publications",
                "Strong evidence for longevity effects",
                "Meta-analyses support repurposing"
              ]}
              link="literature"
            />
          </div>
        </div>

        {/* Section B - Clinical Trials Table */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white">Clinical Trials Overview</h3>
            <button
              onClick={() => onViewDetails('trials')}
              className="text-sm text-white/90 hover:text-white hover:underline"
            >
              View All Clinical Trials →
            </button>
          </div>
          <DataTable
            columns={[
              { key: 'id', label: 'Trial ID' },
              { 
                key: 'phase', 
                label: 'Phase',
                render: (value) => <StatusBadge status={value} type="phase" />
              },
              { 
                key: 'status', 
                label: 'Status',
                render: (value) => <StatusBadge status={value} />
              },
              { key: 'title', label: 'Title' }
            ]}
            data={clinicalTrials}
          />
        </div>

        {/* Section C - Patent Overview */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-white mb-4">Patent Landscape</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-sm text-white/80">
                The original compound patents for Metformin have expired, providing a clear regulatory pathway. 
                However, several formulation and delivery method patents remain active until 2027-2030.
              </p>
              <div className="space-y-3">
                <ScoreBar label="Patent Risk Score" score={15} color="#16C2A5" />
                <ScoreBar label="Freedom to Operate" score={91} color="#F2C94C" />
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-white">Patent Expiration Timeline</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={patentTimeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                  <XAxis dataKey="year" stroke="#FFFFFF" />
                  <YAxis stroke="#FFFFFF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      color: '#FFFFFF'
                    }}
                  />
                  <Bar dataKey="count" fill="#F2C94C" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <button
            onClick={() => onViewDetails('patents')}
            className="mt-4 text-sm text-white/90 hover:text-white hover:underline"
          >
            View Detailed Patent Analysis →
          </button>
        </div>

        {/* Section D - Literature Summary */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white">Scientific Literature</h3>
            <button
              onClick={() => onViewDetails('literature')}
              className="text-sm text-white/90 hover:text-white hover:underline"
            >
              View All Literature →
            </button>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <ArticleCard
              title="Metformin and longevity: novel insights from preclinical models"
              journal="Nature Aging"
              year={2023}
              conclusion="Metformin demonstrates significant life-extending effects through AMPK pathway activation."
              relevanceScore={95}
            />
            <ArticleCard
              title="Repurposing metformin for cancer prevention: meta-analysis"
              journal="Journal of Clinical Oncology"
              year={2024}
              conclusion="Evidence suggests 30% reduction in cancer incidence among long-term metformin users."
              relevanceScore={89}
            />
          </div>
        </div>

        {/* Section E - Score Breakdown Chart */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-white mb-4">Comprehensive Score Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.2)" />
                  <PolarAngleAxis dataKey="category" stroke="#FFFFFF" />
                  <PolarRadiusAxis stroke="#FFFFFF" />
                  <Radar 
                    name="Score" 
                    dataKey="score" 
                    stroke="#16C2A5" 
                    fill="#16C2A5" 
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              <h4 className="text-white">Key Metrics</h4>
              <ScoreBar label="Clinical Signal Strength" score={82} color="#16C2A5" />
              <ScoreBar label="Patent Clearance Score" score={91} color="#F2C94C" />
              <ScoreBar label="Literature Relevance" score={88} color="#9B59B6" />
              <ScoreBar label="Market Potential" score={75} color="#3498DB" />
              <ScoreBar label="Safety Profile" score={95} color="#16C2A5" />
            </div>
          </div>
        </div>

        {/* Section F - Report Download */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white mb-2">Export Full Report</h3>
              <p className="text-sm text-white/80">
                Download AI-generated evidence summary as a PDF with all charts, tables, and references.
              </p>
            </div>
            <button
              onClick={() => onViewDetails('pdf')}
              className="flex items-center gap-2 bg-white/90 text-purple-900 px-6 py-3 rounded-lg hover:bg-white transition-colors"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Trials by Phase Chart */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-white mb-4">Clinical Trials by Phase</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={phaseData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
              <XAxis dataKey="phase" stroke="#FFFFFF" />
              <YAxis stroke="#FFFFFF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: '#FFFFFF'
                }}
              />
              <Bar dataKey="count" fill="#16C2A5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}