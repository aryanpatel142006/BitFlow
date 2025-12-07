import    React from "react";

export default function Footer() {
    return (
        <div>
             {/* Footer */}
        <footer className="border-t border-blue-500/30 bg-black/40 backdrop-blur-xl mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-white mb-2">Motivation</h3>
                <p className="text-gray-400 leading-relaxed">
                  Modern CPUs rely on digital logic, binary math, and internal encoding/decoding. 
                  This project integrates all of these concepts together, into a simple yet powerful single interactive system.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Key Concepts</h3>
                <ul className="text-gray-400 space-y-1">
                  <li>• Boolean logic & K-maps</li>
                  <li>• Number representation systems</li>
                  <li>• Arithmetic logic units</li>
                  <li>• Overflow & carry detection</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Tech Stack</h3>
                <p className="text-gray-400 leading-relaxed">
                  Built with React, TypeScript, Javascript, Shadcn and Vite. Deployed on Vercel for seamless access.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
              <p>BitFlow © 2025 - Educational Computer Architecture Simulator</p>
              <p className="text-white ">Made with &lt;3 by Aryan Patel!</p>
            </div>
          </div>
        </footer>
        </div>
    );
}