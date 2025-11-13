import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    // Gradient background for the whole page
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 via-pink-100 to-sky-100 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        <div className="text-center mb-16">
          {/* Gradient text for the main title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Virtual Dressing Room
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Try on clothes virtually and find your perfect fit
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Card with "Glassmorphism" effect */}
          <div className="bg-white/60 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Virtual Try-On</h2>
            <p className="text-slate-600 mb-8">
              Upload your photo and try different clothing items in real-time with our
              AI-powered virtual fitting room.
            </p>
            <Link
              to="/virtual-try-on"
              className="inline-flex items-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Try It Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Card with "Glassmorphism" effect */}
          <div className="bg-white/60 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Size Predictor</h2>
            <p className="text-slate-600 mb-8">
              Get accurate size recommendations based on your body measurements to
              find clothes that fit perfectly.
            </p>
            <Link
              to="/size-predictor"
              className="inline-flex items-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Find My Size
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-8">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* "How It Works" step card */}
            <div className="bg-white/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-purple-600 font-extrabold text-5xl mb-3">1</div>
              <h4 className="text-xl font-semibold text-slate-700 mb-2">Upload Photo</h4>
              <p className="text-slate-600">
                Simply upload a clear front-facing photo of yourself.
              </p>
            </div>

            {/* "How It Works" step card */}
            <div className="bg-white/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-purple-600 font-extrabold text-5xl mb-3">2</div>
              <h4 className="text-xl font-semibold text-slate-700 mb-2">Select Clothing</h4>
              <p className="text-slate-600">
                Browse our collection and pick items you want to try.
              </p>
            </div>

            {/* "How It Works" step card */}
            <div className="bg-white/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-purple-600 font-extrabold text-5xl mb-3">3</div>
              <h4 className="text-xl font-semibold text-slate-700 mb-2">See the Result</h4>
              <p className="text-slate-600">
                Our AI will show you how the clothes look on you.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}