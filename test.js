const { mergeTimeRanges } = require('./my-module');

const testCases = [
  {
    ranges: [
      [1000, 2000],
      [2500, 4000],
      [3900, 4100],
      [8000, 9000],
      [9050, 9500]
    ],
    threshold: 200
  },
  {
    ranges: [
      [0, 10],
      [15, 20],
      [25, 30]
    ],
    threshold: 4
  },
  {
    ranges: [
      [0, 10],
      [12, 15],
      [17, 25],
      [27, 35]
    ],
    threshold: 3
  }
];

for (const { ranges, threshold } of testCases) {
  console.log('Input:', ranges, 'Threshold:', threshold);
  console.log('Output:', mergeTimeRanges(ranges, threshold));
  console.log('---');
}
