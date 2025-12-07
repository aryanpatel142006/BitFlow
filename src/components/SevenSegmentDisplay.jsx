import React from 'react';

// Truth table for 7-segment display (segments a-g)
// Based on Boolean logic minimization using K-maps
const SEGMENT_MAP = {
  0: [true, true, true, true, true, true, false],      // 0: a,b,c,d,e,f
  1: [false, true, true, false, false, false, false],  // 1: b,c
  2: [true, true, false, true, true, false, true],     // 2: a,b,d,e,g
  3: [true, true, true, true, false, false, true],     // 3: a,b,c,d,g
  4: [false, true, true, false, false, true, true],    // 4: b,c,f,g
  5: [true, false, true, true, false, true, true],     // 5: a,c,d,f,g
  6: [true, false, true, true, true, true, true],      // 6: a,c,d,e,f,g
  7: [true, true, true, false, false, false, false],   // 7: a,b,c
  8: [true, true, true, true, true, true, true],       // 8: all segments
  9: [true, true, true, true, false, true, true],      // 9: a,b,c,d,f,g
  10: [true, true, true, false, true, true, true],     // A: a,b,c,e,f,g
  11: [false, false, true, true, true, true, true],    // b: c,d,e,f,g
  12: [true, false, false, true, true, true, false],   // C: a,d,e,f
  13: [false, true, true, true, true, false, true],    // d: b,c,d,e,g
  14: [true, false, false, true, true, true, true],    // E: a,d,e,f,g
  15: [true, false, false, false, true, true, true],   // F: a,e,f,g
};

export function SevenSegmentDisplay({ value, active = true }) {
  // for now uses this segment map to light up segments based on the input value (0-15)
  const segments = SEGMENT_MAP[value] || [false, false, false, false, false, false, false];
  
  const segmentClass = (isOn) =>
    `transition-all duration-400 ${
      active && isOn
      // if active and segment is on
        ? 'fill-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]'
        : 'fill-gray-800 dark:fill-gray-700'
    }`;

  return (
    <div className="flex items-center justify-center p-4">
      <svg
        viewBox="0 0 100 150"
        className="w-24 h-36"
        style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))' }}
      >
        {/* Segment a (top) */}
        <polygon
          points="20,10 30,5 70,5 80,10 70,15 30,15"
          className={segmentClass(segments[0])}
        />
        
        {/* Segment b (top-right) */}
        <polygon
          points="80,15 85,20 85,60 80,70 75,65 75,20"
          className={segmentClass(segments[1])}
        />
        
        {/* Segment c (bottom-right) */}
        <polygon
          points="80,80 85,90 85,130 80,140 75,135 75,85"
          className={segmentClass(segments[2])}
        />
        
        {/* Segment d (bottom) */}
        <polygon
          points="20,140 30,135 70,135 80,140 70,145 30,145"
          className={segmentClass(segments[3])}
        />
        
        {/* Segment e (bottom-left) */}
        <polygon
          points="20,80 25,85 25,135 20,140 15,130 15,90"
          className={segmentClass(segments[4])}
        />
        
        {/* Segment f (top-left) */}
        <polygon
          points="20,15 25,20 25,65 20,70 15,60 15,20"
          className={segmentClass(segments[5])}
        />
        
        {/* Segment g (middle) */}
        <polygon
          points="20,75 25,70 75,70 80,75 75,80 25,80"
          className={segmentClass(segments[6])}
        />
      </svg>
    </div>
  );
}
