// 90 - 99 Orange
// 80 - 89 Amber
// 70 - 79 Yellow
// 60 - 69 Lime
// 50 - 59 Green
// 40 - 49 Teal
// 30 - 39 Cyan
// 20 - 29 Sky
// 10 - 19 Blue
//  0 -  9 Indigo
// -1 - -10 Violet
// -11 - -20 Fuchsia
// -21 - -30 Pink
// -31 - 40 Rose

// -----------------------40 - 49 Emeral

type TempRange = {
  high: number,
  low: number,
  color: string
}

const ranges: TempRange[] = [
  {
    low: 100,
    high: 1000,
    color: 'red',
  },
  {
    low: 90,
    high: 99,
    color:   'orange',
  },
  {
    low: 80,
    high: 89,
    color:   'amber',
  },
  {
    low: 70,
    high: 79,
    color:   'yellow',
  },
  {
    low: 60,
    high: 69,
    color:   'lime',
  },
  {
    low: 50,
    high: 59,
    color:   'green',
  },
  {
    low: 40,
    high: 49,
    color:   'teal',
  },
  {
    low: 30,
    high: 39,
    color:   'cyan',
  },
  {
    low: 20,
    high: 29,
    color:   'sky',
  },
  {
    low: 10,
    high: 19,
    color:   'blue',
  },
  {
    low: 0,
    high: 9,
    color:   'indigo',
  },
  {
    low: -1,
    high: -10,
    color:   'violet',
  },
  {
    low: -11,
    high: -20,
    color:   'fuchsia',
  },
  {
    low: -21,
    high: -30,
    color:   'pink',
  },
  {
    low: -31,
    high: -40,
    color:   'rose',
  },
]

function blankRange(n: number): TempRange {
  return {
    low: n,
    high: n,
    color: 'gray',
  }
}

export function getRange(temp: number): TempRange {
  for (let i = 0; i < ranges.length; i++) {
    const range = ranges[i]

    if (range.high >= temp && range.low <= temp) {
      return range
    }
  }

  return blankRange(temp)
}

export function rangeStyle(range: TempRange, prefix: string, level: number): string {
  return `${prefix}-${range.color}-${level}`
}

const x = `
from-yellow-500
to-yellow-500
from-yellow-500 to-yellow-500 w-[5%] h-3
from-yellow-500 to-lime-500 w-[5%] h-3
from-lime-500 to-lime-500 w-[5%] h-3
from-lime-500 to-lime-500 w-[5%] h-3
from-lime-500 to-lime-500 w-[5%] h-3
from-lime-500 to-yellow-500 w-[5%] h-3
from-yellow-500 to-yellow-500 w-[5%] h-3
from-yellow-500 to-amber-500 w-[5%] h-3
from-amber-500 to-amber-500 w-[5%] h-3
from-amber-500 to-amber-500 w-[5%] h-3
from-amber-500 to-amber-500 w-[5%] h-3
from-amber-500 to-orange-500 w-[5%] h-3
from-orange-500 to-orange-500 w-[5%] h-3
from-orange-500 to-orange-500 w-[5%] h-3
from-orange-500 to-orange-500 w-[5%] h-3
from-orange-500 to-orange-500 w-[5%] h-3
from-orange-500 to-amber-500 w-[5%] h-3
from-amber-500 to-amber-500 w-[5%] h-3
from-amber-500 to-amber-500 w-[5%] h-3
from-amber-500 to-yellow-500 w-[5%] h-3
`;
