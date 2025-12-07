import { useState } from 'react'
import './App.css'
import MainContent from './main-contnent.jsx'
import { Cpu, Binary, Calculator, Lightbulb } from 'lucide-react';

function App() {
  // const [inputBits, setInputBits] = useState<boolean[]>([false, false, false, false]);
  const [inputBits, setInputBits] = useState([false, false, false, false]);
  
  // const bitsToNumber = (bits: boolean[]): number => {
  //   return parseInt(bits.map(b => b ? '1' : '0').join(''), 2);
  // };

  const bitsToNumber = (bits) => {
    return parseInt(bits.map(b => b ? '1' : '0').join(''), 2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Circuit board pattern overlay */}
      <div className="fixed inset-0 pointer-events-none circuit-pattern" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-blue-500/30 bg-black/40 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-600 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white tracking-tight">
                  BitFlow: BitLogic Display Engine
                </h1>
                <p className="text-blue-300 text-lg mt-1">
                  A Visual Pipeline from Binary to 7-Segment
                </p>
              </div>
            </div>
            <p className="text-gray-300 max-w-4xl leading-relaxed">
              Interactive visual system demonstrating how computers interpret and process numeric data at the architectural level. 
              Integrates Boolean logic design, digital number representations, arithmetic unit operations, and hardware-style output decoding 
              to simulate the internal behavior of a CPU.
            </p>
          </div>
        </header>
        {/* Main Content */}
        <MainContent />
        {/* Footer */}
      </div>
    </div>

  );
}

export default App
