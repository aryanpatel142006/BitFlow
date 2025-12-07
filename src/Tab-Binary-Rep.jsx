import { React, useState } from "react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs.js"
import { BinaryRepresentation } from "./components/BinaryRepresentation.jsx";
import { Card } from '@/components/ui/card';
// import { BinaryInput } from '@/components/BinaryInput';


export default function BinaryRepresentationTab() {
      const [inputBits, setInputBits] = useState([false, false, false, false]);
        
      const bitsToNumber = (bits) => {
        //  takes state input and maps to 0 or 1 and joins them creating a string which is converted to binary/base 2
        return parseInt(bits.map(b => b ? '1' : '0').join(''), 2);
    };
    return (
        <div>

            {/* Binary Representation Tab */}
            <TabsContent value="representation" className="space-y-6">
              <div className="grid lg:grid-cols-5 gap-6">
                <Card className="lg:col-span-2 p-6 bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-2 border-purple-500/30 backdrop-blur">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Input Controls</h2>
                      <p className="text-sm text-gray-400">Set your 4-bit binary value</p>
                    </div>
                    
                    <BinaryInput bits={inputBits} onChange={setInputBits} label="Binary Input" />

                    <div className="text-xs text-gray-400 bg-purple-950/30 p-3 rounded border border-purple-800/30">
                      <div className="font-semibold text-purple-400 mb-1">Architecture Relevance:</div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Number representations in computer systems</li>
                        <li>Integer interpretation methods</li>
                        <li>Complement arithmetic (1's and 2's)</li>
                        <li>Signed vs unsigned data types</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <div className="lg:col-span-3">
                  <BinaryRepresentation bits={inputBits} />
                </div>
              </div>
            </TabsContent>
        </div>
    )
};