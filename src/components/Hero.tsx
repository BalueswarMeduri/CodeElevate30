import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToChallenge = () => {
    const element = document.getElementById('challenges');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-amber-400 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] -top-[400px] -left-[400px] bg-amber-300 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-[300px] -right-[300px] bg-amber-500 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute w-[500px] h-[500px] top-[100px] right-[100px] bg-yellow-300 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-center">
            <div 
              className="inline-block bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={scrollToChallenge}
            >
              <div className="flex items-center space-x-2 text-amber-600">
                <Code2 size={20} />
                <span className="font-medium">30 Days of DSA Challenges</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              CodeElevate
              <span className="pl-1 text-amber-900">30</span>
              <h2 className=' pt-2 block text-2xl md:text-4xl text-yellow-700'>By Golden Opportunities</h2>
            </h1>
            
            <p className="text-xl text-amber-900 max-w-2xl mx-auto">
              Master data structures and algorithms with our carefully curated 30-day challenge. 
              Each day brings new problems to elevate your coding skills.
            </p>
            
            <button 
              onClick={scrollToChallenge}
              className="group bg-amber-900 hover:bg-amber-800 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-3"
            >
              <span>Start Challenge</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              className="group ml-3 bg-amber-900 hover:bg-amber-800 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-3"
            >
              <a target='_blank' href="https://drive.google.com/file/d/1G1ABdagewTUPqZqGfe84Om5VbhRvL5eZ/view"><span>DSA Challenge Plan </span></a>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};