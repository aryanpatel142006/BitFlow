"use client";
import React, { useState } from 'react';
// import { Card } from "../components/ui/card.tsx";


import { BinaryInput } from '@/components/BinaryInput';
// import { BinaryRepresentation } from '@/components/BinaryRepresentation';
import { SevenSegmentDisplay } from '@/components/SevenSegmentDisplay';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';




export default function SevenSegmentDecoder() {
  const [inputBits, setInputBits] = useState([false, false, false, false]);
  
  const bitsToNumber = (bits) => {
    //  takes state input and maps to 0 or 1 and joins them creating a string which is converted to binary/base 2
    return parseInt(bits.map(b => b ? '1' : '0').join(''), 2);
  };
    return (
        <div>
            {/* 7-Segment Decoder Tab */}
            <TabsContent value="decoder" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">

                {/* Test components */}
                {/* <SevenSegmentDisplay value={1} active={true} /> */}
                {/* <BinaryInput bits={[false, true, false, true]} onChange={() => {}} /> */}

                <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-2 border-blue-500/30 backdrop-blur">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Input Controls</h2>
                      <p className="text-sm text-gray-400">Toggle bits to change the display output</p>
                    </div>
                    
                    <BinaryInput bits={inputBits} onChange={setInputBits} label="4-Bit Binary Input" />
                    
                    <div className="bg-black/50 rounded-lg p-4 border border-blue-500/30">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-xs text-gray-400 mb-1">Decimal</div>
                          <div className="text-3xl font-mono font-bold text-blue-400">
                            {bitsToNumber(inputBits)}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400 mb-1">Hexadecimal</div>
                          <div className="text-3xl font-mono font-bold text-purple-400">
                            0x{bitsToNumber(inputBits).toString(16).toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-gray-400 bg-blue-950/30 p-3 rounded border border-blue-800/30">
                      <div className="font-semibold text-blue-400 mb-1">Architecture Relevance:</div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Digital logic and combinational circuits</li>
                        <li>Boolean minimization using Karnaugh Maps</li>
                        <li>Segment-driving logic equations (a-g)</li>
                        <li>Truth tables for hexadecimal digits (0-F)</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-2 border-red-500/30 backdrop-blur">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">7-Segment Display</h2>
                      <p className="text-sm text-gray-400">Hardware-style LED output visualization</p>
                    </div>
                    
                    <div className="flex justify-center bg-black rounded-xl p-8 border-4 border-gray-700 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                      <SevenSegmentDisplay value={bitsToNumber(inputBits)} active={true} />
                    </div>

                    <div className="bg-red-950/30 p-4 rounded-lg border border-red-500/30">
                      <h3 className="text-sm font-semibold text-red-400 mb-2">Segment Layout</h3>
                      <div className="text-xs text-gray-300 font-mono space-y-1">
                        <div>Segments: a (top), b (top-right), c (bottom-right),</div>
                        <div className="ml-16">d (bottom), e (bottom-left), f (top-left), g (middle)</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
                        <button
                          key={num}
                          onClick={() => setInputBits(num.toString(2).padStart(4, '0').split('').map(b => b === '1'))}
                          className="bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded p-2 transition-all hover:border-blue-500"
                        >
                          <div className="text-xs text-gray-400 mb-1">0x{num.toString(16).toUpperCase()}</div>
                          <div className="scale-[0.4] -my-4">
                            <SevenSegmentDisplay value={num} active={true} />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </Card> */}
              </div>
            </TabsContent>
        </div>
    )
}