"use client";

import React from 'react';
import { Card } from '@/components/ui/card';

export function BinaryRepresentation({ bits }) {
  const binaryString = bits.map(b => b ? '1' : '0').join('');
  const binaryValue = parseInt(binaryString, 2);
  
  // Unsigned: Direct binary to decimal
  const unsigned = binaryValue;
  
  // Signed-Magnitude: MSB is sign, rest is magnitude
  const signedMagnitude = bits[0] 
    ? -parseInt(bits.slice(1).map(b => b ? '1' : '0').join(''), 2)
    : parseInt(bits.slice(1).map(b => b ? '1' : '0').join(''), 2);
  
  // 1's Complement: Invert all bits for negative
  const onesComplement = bits[0]
    ? -(~binaryValue & 0b1111)
    : binaryValue;
  
  // 2's Complement: Standard signed integer representation
  const twosComplement = binaryValue >= 8 ? binaryValue - 16 : binaryValue;
  
  // Hexadecimal
  const hexadecimal = binaryValue.toString(16).toUpperCase();
  
  const representations = [
    {
      name: 'Unsigned',
      value: unsigned,
      explanation: 'Direct binary to decimal conversion. All bits represent magnitude.',
      formula: bits.map((b, i) => b ? `2^${bits.length - 1 - i}` : null).filter(Boolean).join(' + ') || '0'
    },
    {
      name: 'Signed-Magnitude',
      value: signedMagnitude,
      explanation: 'MSB (leftmost bit) represents sign (0=positive, 1=negative). Remaining bits are magnitude.',
      formula: `${bits[0] ? '-' : '+'}(${bits.slice(1).map(b => b ? '1' : '0').join('')})₂`
    },
    {
      name: "1's Complement",
      value: onesComplement,
      explanation: 'Negative numbers are bitwise complement of positive. Has two representations of zero.',
      formula: bits[0] ? `-(invert ${binaryString})` : binaryString
    },
    {
      name: "2's Complement",
      value: twosComplement,
      explanation: "Standard CPU representation. Negative = invert bits + 1. Range: -8 to 7 for 4-bit.",
      formula: bits[0] ? `${binaryValue} - 16 = ${twosComplement}` : binaryString
    },
    {
      name: 'Hexadecimal',
      value: `0x${hexadecimal}`,
      explanation: 'Base-16 representation. Each hex digit = 4 bits. Used in memory addresses.',
      formula: `${binaryString}₂ = ${hexadecimal}₁₆`
    }
  ];

  return (
    <div className="space-y-3">
      <div className="bg-gradient-to-r from-blue-950 to-purple-950 p-4 rounded-lg border border-blue-800">
        <div className="text-center space-y-1">
          <div className="text-sm text-blue-300 font-medium">Raw Binary</div>
          <div className="text-3xl font-mono font-bold text-white tracking-wider">
            {binaryString}
          </div>
        </div>
      </div>
      
      <div className="grid gap-3">
        {representations.map((rep, index) => (
          <Card key={index} className="p-4 bg-card/50 backdrop-blur border-muted hover:border-primary/50 transition-colors">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm text-primary">{rep.name}</h3>
                <span className="text-2xl font-mono font-bold text-foreground">
                  {rep.value}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {rep.explanation}
              </p>
              <div className="text-xs font-mono bg-muted/50 p-2 rounded border border-border">
                {rep.formula}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
