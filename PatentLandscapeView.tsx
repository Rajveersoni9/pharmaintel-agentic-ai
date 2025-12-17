import { ArrowLeft, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import { ScoreBar } from '../ScoreBar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface PatentLandscapeViewProps {
  onBack: () => void;
}

export function PatentLandscapeView({ onBack }: PatentLandscapeViewProps) {
  const riskScore = 15; // Low risk

  const patentTimeline = [
    { year: '2024', active: 12, expiring: 3 },
    { year: '2025', active: 10, expiring: 2 },
    { year: '2026', active: 8, expiring: 2 },
    { year: '2027', active: 6, expiring: 3 },
    { year: '2028', active: 4, expiring: 1 },
    { year: '2029', active: 3, expiring: 1 },
    { year: '2030', active: 2, expiring: 2 },
  ];

  const patents = [
    {
      id: 'US8765432',
      title: 'Extended Release Metformin Formulation',
      assignee: 'PharmaCorp Inc.',
      filed: '2019-03-15',
      expires: '2027-03-15',
      status: 'Active',
      risk: 'Medium',
      classification: 'Formulation'
    },
    {
      id: 'US8765433',
      title: 'Metformin Delivery System',
      assignee: 'BioTech Solutions',
      filed: '2020-06-20',
      expires: '2028-06-20',
      status: 'Active',
      risk: 'Low',
      classification: 'Delivery Method'
    },
    {
      id: 'US7654321',
      title: 'Metformin Hydrochloride Composition',
      assignee: 'Generic Pharma',
      filed: '2010-01-10',
      expires: '2024-01-10',
      status: 'Expired',
      risk: 'None',
      classification: 'Composition'
    },
    {
      id: 'US8765434',
      title: 'Combination Therapy with Metformin',
      assignee: 'Innovate Drugs Ltd.',
      filed: '2021-09-05',
      expires: '2029-09-05',
      status: 'Active',
      risk: 'Low',
      classification: 'Combination'
    },
  ];

  const classifications = [
    { type: 'Formulation', count: 5, risk: 'Medium' },
    { type: 'Delivery Method', count: 3, risk: 'Low' },
    { type: 'Composition', count: 1, risk: 'None' },
    { type: 'Combination', count: 2, risk: 'Low' },
    { type: 'Manufacturing', count: 1, risk: 'Low' },
  ];

  const similarPatents = [
    {
      title: 'Modified Release Metformin Tablet',
      similarity: 87,
      status: 'Active',
      expires: '2026-12'
    },
    {
      title: 'Gastric Retention Metformin System',
      similarity: 72,
      status: 'Active',
      expires: '2027-08'
    },
    {
      title: 'Metformin Salt Compositions',
      similarity: 65,
      status: 'Expired',
      expires: '2023-04'
    },
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
          <h1 className="text-white">Patent Landscape Analysis</h1>
          <p className="text-white/80 mt-2">
            Comprehensive IP assessment and freedom-to-operate analysis
          </p>
        </div>

        {/* Risk Meter Component */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-white mb-6">Overall Patent Risk Assessment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Risk Dial */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-48 h-48">
                <svg className="transform -rotate-90 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="80"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="16"
                    fill="none"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="80"
                    stroke="#16C2A5"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray={`${(riskScore / 100) * 502.65} 502.65`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl text-[#16C2A5]">{riskScore}</span>
                  <span className="text-xs text-white/70 mt-1">LOW RISK</span>
                </div>
              </div>
              <p className="text-center text-sm text-white/80 mt-4 max-w-xs">
                Low patent risk indicates strong freedom to operate with minimal IP barriers
              </p>
            </div>

            {/* Risk Breakdown */}
            <div className="space-y-4">
              <h4 className="text-white">Risk Factors</h4>
              <ScoreBar label="Composition Claims" score={5} color="#16C2A5" />
              <ScoreBar label="Formulation Patents" score={35} color="#F2C94C" />
              <ScoreBar label="Manufacturing Methods" score={12} color="#16C2A5" />
              <ScoreBar label="Delivery Systems" score={18} color="#16C2A5" />
              
              <div className="mt-6 p-4 bg-white/10 border border-white/30 rounded-lg">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#16C2A5] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-white">Clear Path Forward</p>
                    <p className="text-xs text-white/70 mt-1">
                      Core composition patents have expired. Remaining patents focus on specific formulations that can be designed around.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patent Expiration Timeline */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-white mb-4">Patent Expiration Timeline</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={patentTimeline}>
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
              <Line 
                type="monotone" 
                dataKey="active" 
                stroke="#16C2A5" 
                strokeWidth={2}
                name="Active Patents"
              />
              <Line 
                type="monotone" 
                dataKey="expiring" 
                stroke="#F2C94C" 
                strokeWidth={2}
                name="Expiring Patents"
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-white/80 mt-4">
            Patent landscape shows declining IP barriers over the next 5 years, with most formulation patents expiring by 2027-2028.
          </p>
        </div>

        {/* Patent Classification List */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-white mb-4">Patent Classification Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {classifications.map((item, idx) => (
              <div key={idx} className="border border-white/20 rounded-lg p-4 bg-white/5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm text-white">{item.type}</h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.risk === 'None' ? 'bg-[#16C2A5]/20 text-[#16C2A5]' :
                    item.risk === 'Low' ? 'bg-blue-400/20 text-blue-400' :
                    'bg-[#F2C94C]/20 text-[#F2C94C]'
                  }`}>
                    {item.risk} Risk
                  </span>
                </div>
                <div className="text-2xl text-white">{item.count}</div>
                <div className="text-xs text-white/70">patents</div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Patent Table */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-white mb-4">Key Patents</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 text-sm text-white/70">Patent ID</th>
                  <th className="text-left py-3 px-4 text-sm text-white/70">Title</th>
                  <th className="text-left py-3 px-4 text-sm text-white/70">Classification</th>
                  <th className="text-left py-3 px-4 text-sm text-white/70">Expires</th>
                  <th className="text-left py-3 px-4 text-sm text-white/70">Status</th>
                  <th className="text-left py-3 px-4 text-sm text-white/70">Risk</th>
                </tr>
              </thead>
              <tbody>
                {patents.map((patent, idx) => (
                  <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-sm text-[#16C2A5]">{patent.id}</td>
                    <td className="py-3 px-4 text-sm text-white">{patent.title}</td>
                    <td className="py-3 px-4 text-sm text-white/70">{patent.classification}</td>
                    <td className="py-3 px-4 text-sm text-white">{patent.expires}</td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded border text-xs ${
                        patent.status === 'Active' 
                          ? 'bg-[#16C2A5]/20 text-[#16C2A5] border-[#16C2A5]/30'
                          : 'bg-white/10 text-white/70 border-white/20'
                      }`}>
                        {patent.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded border text-xs ${
                        patent.risk === 'None' ? 'bg-[#16C2A5]/20 text-[#16C2A5] border-[#16C2A5]/30' :
                        patent.risk === 'Low' ? 'bg-blue-400/20 text-blue-400 border-blue-400/30' :
                        'bg-[#F2C94C]/20 text-[#F2C94C] border-[#F2C94C]/30'
                      }`}>
                        {patent.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Similar Patents Section */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-white mb-4">Similar Patents (AI-Detected)</h3>
          <div className="space-y-3">
            {similarPatents.map((patent, idx) => (
              <div key={idx} className="border border-white/20 rounded-lg p-4 hover:border-white/40 transition-colors bg-white/5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="mb-1 text-white">{patent.title}</h4>
                    <div className="flex items-center gap-3 text-xs text-white/70">
                      <span>Expires: {patent.expires}</span>
                      <span>•</span>
                      <span className={patent.status === 'Active' ? 'text-[#16C2A5]' : 'text-white/70'}>
                        {patent.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-2xl text-white">{patent.similarity}%</div>
                    <div className="text-xs text-white/70">similarity</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Note */}
        <div className="bg-[#F2C94C]/10 border border-[#F2C94C]/30 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#F2C94C] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white mb-2">Legal Disclaimer</h4>
              <p className="text-sm text-white/80">
                This patent analysis is generated by AI for informational purposes only and does not constitute legal advice. 
                Consult with qualified patent attorneys before making any business decisions based on this information. 
                Patent landscapes are complex and subject to change through litigation, licensing, and new filings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}