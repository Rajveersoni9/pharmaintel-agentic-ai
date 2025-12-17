import { ArrowLeft, Download, FileText } from 'lucide-react';

interface PDFPreviewScreenProps {
  onBack: () => void;
}

export function PDFPreviewScreen({ onBack }: PDFPreviewScreenProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
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

      <div className="max-w-5xl mx-auto space-y-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Results
          </button>
          
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            <Download className="w-5 h-5" />
            Download Report
          </button>
        </div>

        <div>
          <h1 className="text-white">PDF Report Preview</h1>
          <p className="text-white/80 mt-2">
            Comprehensive analysis report ready for export
          </p>
        </div>

        {/* PDF Preview Container */}
        <div className="bg-[#1a1a1a] border border-pharma rounded-lg p-8 space-y-8">
          
          {/* Cover Page */}
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-12 text-center border border-pharma">
            <div className="space-y-6">
              <FileText className="w-16 h-16 text-primary mx-auto" />
              <div>
                <h2 className="text-4xl text-card-foreground mb-3">
                  PharmaIntel Agentic AI
                </h2>
                <p className="text-xl text-muted-foreground">
                  Intelligence Report
                </p>
              </div>
              <div className="h-px bg-pharma-border w-2/3 mx-auto" />
              <div className="space-y-2">
                <p className="text-lg text-card-foreground">
                  Repurposing Opportunities for Metformin
                </p>
                <p className="text-sm text-muted-foreground">
                  Generated: {currentDate}
                </p>
                <p className="text-sm text-muted-foreground">
                  Report ID: RPT-2024-MTF-001
                </p>
              </div>
            </div>
          </div>

          {/* Executive Summary Page */}
          <div className="bg-card border border-pharma rounded-lg p-8 space-y-4">
            <div className="border-b border-pharma pb-3">
              <h3 className="text-primary">Executive Summary</h3>
            </div>
            
            <div className="space-y-4 text-sm">
              <p className="text-card-foreground">
                This comprehensive analysis evaluates the drug repurposing potential of Metformin across multiple therapeutic areas. 
                Our multi-agent AI system has analyzed clinical trials, patent landscapes, and scientific literature to provide 
                actionable intelligence.
              </p>
              
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center p-4 bg-primary/10 rounded border border-primary/30">
                  <div className="text-3xl text-primary mb-1">85</div>
                  <div className="text-xs text-muted-foreground">Opportunity Score</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded border border-primary/30">
                  <div className="text-3xl text-primary mb-1">High</div>
                  <div className="text-xs text-muted-foreground">Feasibility</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded border border-primary/30">
                  <div className="text-3xl text-primary mb-1">94%</div>
                  <div className="text-xs text-muted-foreground">Confidence</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-card-foreground">Key Findings:</h4>
                <ul className="space-y-1 text-muted-foreground ml-4">
                  <li>• Strong clinical evidence across 62 active trials</li>
                  <li>• Low patent risk with expired core composition patents</li>
                  <li>• Robust literature support (1,247 publications)</li>
                  <li>• Emerging applications in longevity and cancer prevention</li>
                  <li>• Excellent safety profile with decades of clinical use</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Evidence Highlights Page */}
          <div className="bg-card border border-pharma rounded-lg p-8 space-y-4">
            <div className="border-b border-pharma pb-3">
              <h3 className="text-secondary">Evidence Highlights</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="text-primary">Clinical Trials</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• 62 active trials identified</li>
                  <li>• Phase 2-3 focus areas</li>
                  <li>• PCOS, cancer prevention</li>
                  <li>• Cardiovascular health</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-secondary">Patent Analysis</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• 15% overall risk score</li>
                  <li>• Core patents expired</li>
                  <li>• 10 formulation patents</li>
                  <li>• Clear FTO pathway</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-[#9B59B6]">Literature Review</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• 1,247 publications</li>
                  <li>• Avg IF: 8.7</li>
                  <li>• Strong mechanistic data</li>
                  <li>• Meta-analysis support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Clinical Section Preview */}
          <div className="bg-card border border-pharma rounded-lg p-8 space-y-4">
            <div className="border-b border-pharma pb-3 flex items-center justify-between">
              <h3 className="text-card-foreground">Clinical Evidence</h3>
              <span className="text-xs text-muted-foreground">Page 3</span>
            </div>
            
            <div className="text-sm text-muted-foreground space-y-3">
              <p>
                Our analysis identified 62 active clinical trials investigating Metformin across various therapeutic 
                applications. The majority of trials (38%) are in Phase 2, with significant Phase 3 activity (29%) 
                indicating mature development programs.
              </p>
              
              <div className="bg-muted/10 rounded p-4 border border-pharma">
                <div className="text-xs text-muted-foreground mb-2">Sample Trial Data</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>NCT04567890 - Phase 3</span>
                    <span className="text-primary">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span>NCT04567891 - Phase 2</span>
                    <span className="text-primary">Recruiting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Patent Section Preview */}
          <div className="bg-card border border-pharma rounded-lg p-8 space-y-4">
            <div className="border-b border-pharma pb-3 flex items-center justify-between">
              <h3 className="text-card-foreground">Patent Landscape</h3>
              <span className="text-xs text-muted-foreground">Page 5</span>
            </div>
            
            <div className="text-sm text-muted-foreground space-y-3">
              <p>
                The patent landscape for Metformin presents minimal barriers to entry. Original composition of matter 
                patents have expired, resulting in a favorable freedom-to-operate position. Remaining formulation and 
                delivery patents can be designed around.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-muted/10 rounded p-3 border border-pharma">
                  <div className="text-xs text-muted-foreground mb-1">Patent Risk</div>
                  <div className="text-2xl text-primary">15%</div>
                </div>
                <div className="flex-1 bg-muted/10 rounded p-3 border border-pharma">
                  <div className="text-xs text-muted-foreground mb-1">Freedom to Operate</div>
                  <div className="text-2xl text-primary">91%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Literature Section Preview */}
          <div className="bg-card border border-pharma rounded-lg p-8 space-y-4">
            <div className="border-b border-pharma pb-3 flex items-center justify-between">
              <h3 className="text-card-foreground">Scientific Literature</h3>
              <span className="text-xs text-muted-foreground">Page 7</span>
            </div>
            
            <div className="text-sm text-muted-foreground space-y-3">
              <p>
                A comprehensive literature review identified 1,247 peer-reviewed publications supporting Metformin 
                repurposing. Key research areas include longevity, cancer prevention, PCOS, and cardiovascular health.
              </p>
              
              <div className="bg-muted/10 rounded p-4 border border-pharma text-xs space-y-2">
                <div>
                  <span className="text-card-foreground">Top Publication: </span>
                  <span>Metformin and longevity (Nature Aging, 2023)</span>
                </div>
                <div>
                  <span className="text-card-foreground">Relevance: </span>
                  <span className="text-primary">95%</span>
                  <span className="ml-2">Citations: 142</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decision Scorecard */}
          <div className="bg-card border border-pharma rounded-lg p-8 space-y-4">
            <div className="border-b border-pharma pb-3 flex items-center justify-between">
              <h3 className="text-card-foreground">Decision Scorecard</h3>
              <span className="text-xs text-muted-foreground">Page 9</span>
            </div>
            
            <div className="space-y-3">
              {[
                { label: 'Clinical Signal Strength', score: 82, color: '#16C2A5' },
                { label: 'Patent Clearance Score', score: 91, color: '#F2C94C' },
                { label: 'Literature Relevance', score: 88, color: '#9B59B6' },
                { label: 'Market Potential', score: 75, color: '#3498DB' },
                { label: 'Safety Profile', score: 95, color: '#16C2A5' },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-card-foreground">{item.label}</span>
                    <span style={{ color: item.color }}>{item.score}</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted/20 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${item.score}%`,
                        backgroundColor: item.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-card border border-pharma rounded-lg p-6">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>PharmaIntel Agentic AI Report</span>
              </div>
              <div>
                Generated: {currentDate}
              </div>
              <div>
                Page 10 of 10
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-pharma text-xs text-muted-foreground text-center">
              This report is generated by AI for informational purposes only. Consult qualified professionals before making business decisions.
            </div>
          </div>
        </div>

        {/* Download Button (Bottom) */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            <Download className="w-5 h-5" />
            Download Complete Report (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}