import { useState } from 'react';
import axios from 'axios';
import { ArrowsUpDownIcon, ScaleIcon, UserGroupIcon } from '@heroicons/react/24/outline';

// Measurement Icon for Chest, Waist, Hips
const MeasurementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-slate-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
  </svg>
);


const SizePredictor = () => {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    chest: '',
    waist: '',
    hips: '',
    gender: 'male',
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPrediction(null); // Reset prediction on new submission
    try {
      // Fake delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      const response = await axios.post('http://localhost:5000/api/predict-size', formData);
      setPrediction(response.data.size);
    } catch (error) {
      console.error('Error predicting size:', error);
      // You could set an error state here to show to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    // Re-using the same background from HomePage for consistency
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 via-pink-100 to-sky-100 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center mb-12">
          Find Your Perfect Size
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Glassmorphism Card for the Form */}
          <div className="bg-white/60 p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold text-slate-700 mb-6">Enter Your Measurements</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="height" className="flex items-center text-sm font-medium text-slate-700 mb-1">
                    <ArrowsUpDownIcon className="w-5 h-5 mr-2 text-slate-500" /> Height (cm)
                  </label>
                  <input type="number" id="height" name="height" value={formData.height} onChange={handleChange}
                    className="mt-1 block w-full bg-slate-50/70 rounded-md border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm transition" required />
                </div>
                <div>
                  <label htmlFor="weight" className="flex items-center text-sm font-medium text-slate-700 mb-1">
                    <ScaleIcon className="w-5 h-5 mr-2 text-slate-500" /> Weight (kg)
                  </label>
                  <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange}
                    className="mt-1 block w-full bg-slate-50/70 rounded-md border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm transition" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="chest" className="flex items-center text-sm font-medium text-slate-700 mb-1">
                    <MeasurementIcon /> Chest(cm)
                  </label>
                  <input type="number" id="chest" name="chest" value={formData.chest} onChange={handleChange}
                    className="mt-1 block w-full bg-slate-50/70 rounded-md border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm transition" required />
                </div>
                <div>
                  <label htmlFor="waist" className="flex items-center text-sm font-medium text-slate-700 mb-1">
                    <MeasurementIcon /> Waist(cm)
                  </label>
                  <input type="number" id="waist" name="waist" value={formData.waist} onChange={handleChange}
                    className="mt-1 block w-full bg-slate-50/70 rounded-md border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm transition" required />
                </div>
                <div>
                  <label htmlFor="hips" className="flex items-center text-sm font-medium text-slate-700 mb-1">
                    <MeasurementIcon /> Hips(cm)
                  </label>
                  <input type="number" id="hips" name="hips" value={formData.hips} onChange={handleChange}
                    className="mt-1 block w-full bg-slate-50/70 rounded-md border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm transition" required />
                </div>
              </div>

              <div>
                <label htmlFor="gender" className="flex items-center text-sm font-medium text-slate-700 mb-1">
                  <UserGroupIcon className="w-5 h-5 mr-2 text-slate-500" /> Gender
                </label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange}
                  className="mt-1 block w-full bg-slate-50/70 rounded-md border-slate-300 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm transition">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="pt-4">
                <button type="submit" disabled={loading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105 disabled:bg-purple-400 disabled:cursor-not-allowed">
                  {loading ? 'Predicting...' : 'Predict My Size'}
                </button>
              </div>
            </form>
          </div>
          
          {/* Glassmorphism Card for the Result */}
          <div className="bg-white/60 p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 flex flex-col">
            <h3 className="text-2xl font-bold text-slate-700 mb-6">Your Recommended Size</h3>
            <div className="flex-grow flex items-center justify-center bg-purple-50/50 rounded-lg">
              {loading && <div className="text-slate-500">Calculating...</div>}
              
              {!loading && prediction ? (
                // Animated result
                <div key={prediction} className="text-center animate-fade-in-scale">
                    <span className="text-7xl lg:text-8xl font-extrabold text-purple-600">{prediction}</span>
                    <p className="mt-2 text-slate-600">This is our top recommendation for you!</p>
                </div>
              ) : (
                !loading && (
                  <div className="text-center text-slate-500 px-4">
                    <p>Submit your measurements to get a size recommendation.</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizePredictor;