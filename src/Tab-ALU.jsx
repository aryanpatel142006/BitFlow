"use client";

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BinaryInput } from './components/BinaryInput';
// import { SevenSegmentDisplay } from './components/SevenSegmentDisplay';
import { Plus, Minus, AlertTriangle } from 'lucide-react';

export function ALUComponent() {
  const [inputA, setInputA] = useState([false, false, false, false]);
  const [inputB, setInputB] = useState([false, false, false, false]);
  const [operation, setOperation] = useState('add');
  const [signedMode, setSignedMode] = useState(false);

  const bitsToNumber = (bits, signed) => {
    const value = parseInt(bits.map(b => b ? '1' : '0').join(''), 2);
    if (signed && value >= 8) {
      return value - 16; // 2's complement
    }
    return value;
  };

  const performOperation = () => {
    const numA = bitsToNumber(inputA, signedMode);
    const numB = bitsToNumber(inputB, signedMode);
    
    let result;
    if (operation === 'add') {
      result = numA + numB;
    } else {
      result = numA - numB;
    }

    // Check for overflow
    let overflow = false;
    let actualResult = result;
    
    if (signedMode) {
      // 2's complement overflow: result outside [-8, 7]
      overflow = result < -8 || result > 7;
      if (result < 0) {
        actualResult = (result + 256) & 0b1111;
      } else {
        actualResult = result & 0b1111;
      }
    } else {
      // Unsigned overflow: result outside [0, 15]
      overflow = result < 0 || result > 15;
      actualResult = ((result % 16) + 16) % 16;
    }

    const carry = result > 15 || result < 0;

    return {
      result: actualResult,
      binaryResult: actualResult.toString(2).padStart(4, '0'),
      overflow,
      carry
    };
  };

  const aluResult = performOperation();
  const displayValue = aluResult.result;

  return (
    <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-blue-500/30">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">
            Arithmetic Logic Unit (ALU)
          </h2>
          <p className="text-sm text-gray-400">
            4-bit ALU with overflow detection and signed/unsigned modes
          </p>
        </div>

        {/* Inputs */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <BinaryInput bits={inputA} onChange={setInputA} label="Input A" />
            <div className="text-center text-lg font-mono text-blue-400">
              = {bitsToNumber(inputA, signedMode)}
            </div>
          </div>
          
          <div className="space-y-2">
            <BinaryInput bits={inputB} onChange={setInputB} label="Input B" />
            <div className="text-center text-lg font-mono text-blue-400">
              = {bitsToNumber(inputB, signedMode)}
            </div>
          </div>
        </div>

        {/* Operation Controls */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            <Button
              onClick={() => setOperation('add')}
              variant={operation === 'add' ? 'default' : 'outline'}
              size="lg"
              className={operation === 'add' ? 'bg-green-600 hover:bg-green-700' : ''}
            >
              <Plus className="w-5 h-5 mr-2" />
              Addition
            </Button>
            <Button
              onClick={() => setOperation('subtract')}
              variant={operation === 'subtract' ? 'default' : 'outline'}
              size="lg"
              className={operation === 'subtract' ? 'bg-orange-600 hover:bg-orange-700' : ''}
            >
              <Minus className="w-5 h-5 mr-2" />
              Subtraction
            </Button>
          </div>

          <Button
            onClick={() => setSignedMode(!signedMode)}
            variant="outline"
            size="sm"
            className="w-48"
          >
            Mode: {signedMode ? 'Signed (2\'s Complement)' : 'Unsigned'}
          </Button>
        </div>

        {/* Result Display */}
        <div className="bg-black/50 rounded-lg p-6 space-y-4 border border-blue-500/30">
          <div className="text-center space-y-2">
            <div className="text-sm text-gray-400">Binary Result</div>
            <div className="text-3xl font-mono font-bold text-green-400">
              {aluResult.binaryResult}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-xs text-gray-400">Decimal</div>
              <div className="text-2xl font-mono font-bold text-white">
                {signedMode ? bitsToNumber(aluResult.binaryResult.split('').map(b => b === '1'), signedMode) : aluResult.result}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-400">Hexadecimal</div>
              <div className="text-2xl font-mono font-bold text-white">
                0x{aluResult.result.toString(16).toUpperCase()}
              </div>
            </div>
          </div>

          {/* Flags */}
          <div className="flex justify-center gap-4">
            {aluResult.overflow && (
              <div className="flex items-center gap-2 bg-red-900/30 px-4 py-2 rounded-lg border border-red-500">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span className="text-sm font-semibold text-red-400">
                  OVERFLOW
                </span>
              </div>
            )}
            {aluResult.carry && (
              <div className="flex items-center gap-2 bg-yellow-900/30 px-4 py-2 rounded-lg border border-yellow-500">
                <span className="text-sm font-semibold text-yellow-400">
                  CARRY
                </span>
              </div>
            )}
          </div>

          {/* 7-Segment Display */}
          <div className="flex justify-center pt-4">
            <div className="bg-gray-950 rounded-lg p-4 border-2 border-gray-700">
              <SevenSegmentDisplay value={displayValue} active={true} />
              <div className="text-center text-xs text-gray-500 mt-2">
                7-Segment Output
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Notes */}
        <div className="text-xs text-gray-400 bg-blue-950/30 p-3 rounded border border-blue-800/30">
          <div className="font-semibold text-blue-400 mb-1">Architecture Relevance:</div>
          <ul className="list-disc list-inside space-y-1">
            <li>ALU performs arithmetic and logic operations in CPU</li>
            <li>Ripple-carry addition: carries propagate through bit positions</li>
            <li>Overflow detection: essential for signed arithmetic correctness</li>
            <li>Result feeds decoder logic for 7-segment display output</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}
