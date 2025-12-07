"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

export function BinaryInput({ bits, onChange, label }) {
  const toggleBit = (index) => {
    const newBits = [...bits];
    newBits[index] = !newBits[index];
    onChange(newBits);
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-muted-foreground">
          {label}
        </label>
      )}
      <div className="flex gap-2">
        {bits.map((bit, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <span className="text-xs text-muted-foreground font-mono">
              b{bits.length - 1 - index}
            </span>
            <Button
              onClick={() => toggleBit(index)}
              variant={bit ? "default" : "outline"}
              size="lg"
              className={`w-14 h-14 text-xl font-bold font-mono transition-all ${
                bit
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {bit ? '1' : '0'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
