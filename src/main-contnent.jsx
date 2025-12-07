import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs"
import { Binary, Calculator, Lightbulb } from 'lucide-react';
import SevenSegmentDecoder from "./Tab-7-seg-Decoder.jsx"
import BinaryRepresentation from "./Tab-Binary-Rep.jsx"
import { Card } from '@/components/ui/card.tsx';

// import ALUComponent from "./Tab-ALU.jsx"

export default function MainContent() {
  return (
    // <div>
    //     {/* Main Content */}
    //     {/* <main className="container mx-auto px-4 py-8 bg-black/40 backdrop-blur-lg rounded-lg shadow-lg"> */}
    //     <main className="container mx-auto px-4 py-8">
    //       <Tabs defaultValue="decoder" className="space-y-6 ">
    //         <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid bg-black/40 backdrop-blur border border-blue-500/30">
    //           <TabsTrigger value="decoder" className="data-[state=active]:bg-blue-600 data-[state=inactive]:text-white">
    //             <Lightbulb className="w-4 h-4 mr-2" />
    //             7-Segment Decoder
    //           </TabsTrigger>
    //           <TabsTrigger value="representation" className="data-[state=active]:bg-purple-600 data-[state=inactive]:text-white">
    //             <Binary className="w-4 h-4 mr-2" />
    //             Binary Representation
    //           </TabsTrigger>
    //           <TabsTrigger value="alu" className="data-[state=active]:bg-green-600 data-[state=inactive]:text-white">
    //             <Calculator className="w-4 h-4 mr-2" />
    //             ALU Operations
    //           </TabsTrigger>
    //         </TabsList>

    //         <TabsContent value="decoder" className="bg-black/40 backdrop-blur border border-blue-500/30 rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-white mb-4">7-Segment Decoder</h3>
    //           <p className="text-gray-300">Decoder content goes here</p>
    //         </TabsContent>

    //         <TabsContent value="representation" className="bg-black/40 backdrop-blur border border-blue-500/30 rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-white mb-4">Binary Representation</h3>
    //           <p className="text-gray-300">Binary representation content goes here</p>
    //         </TabsContent>

    //         <TabsContent value="alu" className="bg-black/40 backdrop-blur border border-blue-500/30 rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-white mb-4">ALU Operations</h3>
    //           <p className="text-gray-300">ALU operations content goes here</p>
    //         </TabsContent>
    //       </Tabs>
    //     </main>
    // </div>

    <div>
      {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Tabs defaultValue="decoder" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid bg-black/40 backdrop-blur border border-blue-500/30">
              <TabsTrigger value="decoder" className="data-[state=active]:bg-blue-600">
                <Lightbulb className="w-4 h-4 mr-2" />
                7-Segment Decoder
              </TabsTrigger>
              <TabsTrigger value="representation" className="data-[state=active]:bg-purple-600">
                <Binary className="w-4 h-4 mr-2" />
                Binary Representation
              </TabsTrigger>
              <TabsTrigger value="alu" className="data-[state=active]:bg-green-600">
                <Calculator className="w-4 h-4 mr-2" />
                ALU Operations
              </TabsTrigger>
            </TabsList>
            {/* 7-Segment Decoder Tab */}
            <SevenSegmentDecoder />
            {/* Binary Representation Tab */}
            {/* <BinaryRepresentation /> */}



          


            {/* ALU Tab */}
            <TabsContent value="alu" className="space-y-6">
              {/* <ALUComponent /> */}
            </TabsContent>
          </Tabs>
        </main>
    </div>

    
  );
}
