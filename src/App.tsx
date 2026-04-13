import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FAQPage } from './pages/FAQPage';
import { PricingPage } from './pages/PricingPage';
import { queryClient } from './util/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
