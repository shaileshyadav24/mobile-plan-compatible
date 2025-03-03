import './App.css';
import ScrollToTop from './components/ui/ScrollToTop';
import CompatibilityChecker from './components/CompatibilityChecker';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100 p-4">
        <CompatibilityChecker />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
