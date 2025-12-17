import { useState } from 'react';
import { DataTable } from '../DataTable';
import { StatusBadge } from '../StatusBadge';
import { ArrowLeft, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

interface ClinicalTrialsViewProps {
  onBack: () => void;
}

export function ClinicalTrialsView({ onBack }: ClinicalTrialsViewProps) {
  const [selectedPhase, setSelectedPhase] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  // Mock data
  const allTrials = [
    { id: 'NCT04567890', phase: 'Phase 3', status: 'Active', region: 'North America', title: 'Metformin for Type 2 Diabetes Prevention', enrollment: 1200, startDate: '2023-01' },
    { id: 'NCT04567891', phase: 'Phase 2', status: 'Recruiting', region: 'Europe', title: 'Metformin in Polycystic Ovary Syndrome', enrollment: 450, startDate: '2024-03' },
    { id: 'NCT04567892', phase: 'Phase 4', status: 'Completed', region: 'Asia', title: 'Long-term Safety of Metformin', enrollment: 3200, startDate: '2021-06' },
    { id: 'NCT04567893', phase: 'Phase 2', status: 'Active', region: 'North America', title: 'Metformin for Cancer Prevention', enrollment: 890, startDate: '2023-09' },
    { id: 'NCT04567894', phase: 'Phase 3', status: 'Recruiting', region: 'Europe', title: 'Metformin and Cardiovascular Health', enrollment: 1500, startDate: '2024-01' },
    { id: 'NCT04567895', phase: 'Phase 1', status: 'Active', region: 'North America', title: 'Novel Metformin Formulation Study', enrollment: 60, startDate: '2024-05' },
    { id: 'NCT04567896', phase: 'Phase 2', status: 'Completed', region: 'Asia', title: 'Metformin for Neurodegenerative Disease', enrollment: 320, startDate: '2022-08' },
    { id: 'NCT04567897', phase: 'Phase 3', status: 'Terminated', region: 'Europe', title: 'Metformin Extended Release Study', enrollment: 750, startDate: '2022-11' },
  ];

  const phaseDistribution = [
    { phase: 'Phase 1', count: 12, color: '#3498DB' },
    { phase: 'Phase 2', count: 24, color: '#14B8A6' },
    { phase: 'Phase 3', count: 18, color: '#16C2A5' },
    { phase: 'Phase 4', count: 8, color: '#10B981' },
  ];

  const regionDistribution = [
    { region: 'North America', count: 28 },
    { region: 'Europe', count: 19 },
    { region: 'Asia', count: 12 },
    { region: 'Other', count: 3 },
  ];

  const COLORS = ['#16C2A5', '#F2C94C', '#9B59B6', '#3498DB'];

  // Filter trials
  const filteredTrials = allTrials.filter(trial => {
    if (selectedPhase !== 'All' && trial.phase !== selectedPhase) return false;
    if (selectedStatus !== 'All' && trial.status !== selectedStatus) return false;
    if (selectedRegion !== 'All' && trial.region !== selectedRegion) return false;
    return true;
  });

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
          <h1 className="text-white">Clinical Trials — Detailed Evidence</h1>
          <p className="text-white/80 mt-2">
            Comprehensive analysis of {allTrials.length} clinical trials related to your query
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70">Filters:</span>
            </div>
            
            <select
              value={selectedPhase}
              onChange={(e) => setSelectedPhase(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <option>All Phases</option>
              <option>Phase 1</option>
              <option>Phase 2</option>
              <option>Phase 3</option>
              <option>Phase 4</option>
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Recruiting</option>
              <option>Completed</option>
              <option>Terminated</option>
            </select>

            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <option>All Regions</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia</option>
              <option>Other</option>
            </select>

            <div className="ml-auto text-sm text-white/70">
              Showing {filteredTrials.length} of {allTrials.length} trials
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trials by Phase */}
          <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <h3 className="text-white mb-4">Trials by Phase</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={phaseDistribution}>
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
                <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                  {phaseDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Trials by Region */}
          <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <h3 className="text-white mb-4">Trials by Region</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={regionDistribution}
                  dataKey="count"
                  nameKey="region"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={(entry) => `${entry.region}: ${entry.count}`}
                  labelLine={false}
                >
                  {regionDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: '#FFFFFF'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Full Trial Table */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-white mb-4">Complete Trial Records</h3>
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
              { key: 'region', label: 'Region' },
              { key: 'title', label: 'Title' },
              { 
                key: 'enrollment', 
                label: 'Enrollment',
                render: (value) => value.toLocaleString()
              },
              { key: 'startDate', label: 'Start Date' }
            ]}
            data={filteredTrials}
          />
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-4">
            <div className="text-2xl text-white mb-1">62</div>
            <div className="text-sm text-white/70">Total Trials</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-4">
            <div className="text-2xl text-white mb-1">24,890</div>
            <div className="text-sm text-white/70">Total Participants</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-4">
            <div className="text-2xl text-white mb-1">18</div>
            <div className="text-sm text-white/70">Active Studies</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-4">
            <div className="text-2xl text-white mb-1">73%</div>
            <div className="text-sm text-white/70">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}