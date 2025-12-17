import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LoginScreen } from './components/screens/LoginScreen';
import { HomeScreen } from './components/screens/HomeScreen';
import { ProcessingScreen } from './components/screens/ProcessingScreen';
import { ResultsDashboard } from './components/screens/ResultsDashboard';
import { ClinicalTrialsView } from './components/screens/ClinicalTrialsView';
import { PatentLandscapeView } from './components/screens/PatentLandscapeView';
import { LiteratureView } from './components/screens/LiteratureView';
import { PDFPreviewScreen } from './components/screens/PDFPreviewScreen';

type Screen = 'home' | 'processing' | 'results' | 'trials' | 'patents' | 'literature' | 'pdf';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [query, setQuery] = useState<string>('');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setCurrentScreen('processing');
  };

  const handleProcessingComplete = () => {
    setCurrentScreen('results');
  };

  const handleNavigateHome = () => {
    setCurrentScreen('home');
    setQuery('');
  };

  const handleViewDetails = (section: string) => {
    switch (section) {
      case 'trials':
      case 'clinical':
        setCurrentScreen('trials');
        break;
      case 'patents':
        setCurrentScreen('patents');
        break;
      case 'literature':
        setCurrentScreen('literature');
        break;
      case 'pdf':
        setCurrentScreen('pdf');
        break;
    }
  };

  const handleBackToResults = () => {
    setCurrentScreen('results');
  };

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background dark">
      <Navigation onNavigate={handleNavigateHome} />
      
      {currentScreen === 'home' && (
        <HomeScreen onSearch={handleSearch} />
      )}
      
      {currentScreen === 'processing' && (
        <ProcessingScreen onComplete={handleProcessingComplete} />
      )}
      
      {currentScreen === 'results' && (
        <ResultsDashboard 
          query={query} 
          onViewDetails={handleViewDetails}
        />
      )}
      
      {currentScreen === 'trials' && (
        <ClinicalTrialsView onBack={handleBackToResults} />
      )}
      
      {currentScreen === 'patents' && (
        <PatentLandscapeView onBack={handleBackToResults} />
      )}
      
      {currentScreen === 'literature' && (
        <LiteratureView onBack={handleBackToResults} />
      )}
      
      {currentScreen === 'pdf' && (
        <PDFPreviewScreen onBack={handleBackToResults} />
      )}
    </div>
  );
}