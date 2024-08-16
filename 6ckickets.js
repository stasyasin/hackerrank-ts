function isFullyCovered(target, otherRegions) {
    // Init min, max values from target
    var minX = target.x1;
    var minY = target.y1;
    var maxX = target.x2;
    var maxY = target.y2;
    // get min, max valued from all regions
    var minX1 = Math.min.apply(Math, otherRegions.map(function (r) { return r.x1; }));
    var minY1 = Math.min.apply(Math, otherRegions.map(function (r) { return r.y1; }));
    var maxX1 = Math.max.apply(Math, otherRegions.map(function (r) { return r.x2; }));
    var maxY1 = Math.max.apply(Math, otherRegions.map(function (r) { return r.y2; }));
    // Check if the covered area fully covers the target region
    return minX >= minX1 && minY >= minY1 && maxX <= maxX1 && maxY <= maxY1;
}
// Example usage
var targetRegion = { x1: 3, y1: 3, x2: 10, y2: 10 };
var otherRegions = [
    { x1: 2, y1: 2, x2: 8, y2: 8 },
    { x1: 5, y1: 5, x2: 15, y2: 15 }
];
console.log(isFullyCovered(targetRegion, otherRegions)); // Output: true
