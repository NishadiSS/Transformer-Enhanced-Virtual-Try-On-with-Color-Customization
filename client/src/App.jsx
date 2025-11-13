// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import HomePage from './pages/HomePage.jsx';
import VirtualTryOn from './pages/VirtualTryOn.jsx';
import SizePredictor from './pages/SizePredictor.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Virtual Dressing Room</h1>
          <UserButton />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/virtual-try-on" element={<VirtualTryOn />} />
          <Route path="/size-predictor" element={<SizePredictor />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;