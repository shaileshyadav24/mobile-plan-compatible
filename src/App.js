import './App.css';
import ScrollToTop from './components/common/ScrollToTop';
import CompatibilityChecker from './components/CompatibilityChecker';

function App() {



  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          US Mobile Compatibility Checker
        </h1>
        <CompatibilityChecker />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
