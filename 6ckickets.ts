
interface Region {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function isFullyCovered(target: Region, otherRegions: Region[]): boolean {
  // Init min, max values from target
  let minX = target.x1;
  let minY = target.y1;
  let maxX = target.x2;
  let maxY = target.y2;


  // get min, max valued from all regions
  let minX1 = Math.min(...otherRegions.map(r => r.x1));
  let minY1 = Math.min(...otherRegions.map(r => r.y1));
  let maxX1 = Math.max(...otherRegions.map(r => r.x2));
  let maxY1 = Math.max(...otherRegions.map(r => r.y2));


  // Check if the covered area fully covers the target region
  return minX >= minX1 && minY >= minY1 && maxX <= maxX1 && maxY <= maxY1;
}

// Test sample
const targetRegion: Region = { x1: 3, y1: 3, x2: 10, y2: 10 };
const otherRegions: Region[] = [
  { x1: 2, y1: 2, x2: 8, y2: 8 },
  { x1: 5, y1: 5, x2: 15, y2: 15 }
];

console.log(isFullyCovered(targetRegion, otherRegions)); // Output: true
