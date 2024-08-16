'use strict'

/**
 * The function logic is to save time and reduce O(n) time complexity from O(n*2) to O(n)
 * we can achieve it by using dictObj = {} . The idea is that we will have 1 loop, to which we will write result like { '1': 8, '2': 4, '3': 18, '4': 16, '5': 15, '6': 6, '7': 49, '8': 40 }
 * this will give us time complexity O(n), but also memory complexity O(t), because we need to create a storage.
 *
 *
 *
 * So the total difficulcy of the solution was what do we need to store as a value of dictObj. My idea was to store maxTankSquare for each value.
 * So I wanted to find the barA - barB heights, and multiply it by the width.
 * This logic has a serious issue, that sometimes bars will have less heights, than width, and tank size will be bigger.
 * So the value of each key in the object should be a MAX between maxheight*width or maxWidth*heights.
 *
 * So I need to make some kind of logic what I really need to store to the value. When I was working on this
 * trying to make 1 loop of 1 while loop, I have found that we can simply use method of 2 pointers.
 *
 * In this case we can have only O(n) and we even do not need to store dictObj = {}; But I kept it for illustration of my initial concept
 * Current logic with 2 pointers:
 *  - we assign left pointer to 0
 *  - we assign right pointer to length-1;
 *  - then we do a calculation of currentTank size:
 *     -- we multiple minHeightBetweenTwoBars by width.
 *     -- we compare with currentMaxTank. if currentMaxTank is smaller than currentTank, we overwrite it with the value of currentTank
 *  - then we move left or right pointer by 1.
 *    -- if left pointer is smaller than right pointer, then we move left pointer by 1, and keep right pointer on the same place
 *    -- if left pointer is bigger than right pointer, then we move right pointer by 1, and keep left pointer on the same place
 *
 * Note: Initially we made a solution by using brute force . Double loop with complexity O(n*2).
 *
 * @param heights
 * @returns {number}
 */
function maxTank(heights) {
  if (heights.length === 0 || heights.length === 1) { // protection if heights array is empty or we have only 1 bar
    return 0;
  }

  let currentMaxTank = 0;
  let left = 0;
  let right = heights.length - 1;
  const dictObj = {}; // todo, this is not needed anymore, it is for demonstration about initial concept. It can be removed.

  while (left < right) {
    const minHeightBetweenTwoBars = Math.min(heights[left], heights[right]);
    const width = right - left;
    const currentTank = minHeightBetweenTwoBars * width;

    currentMaxTank = Math.max(currentMaxTank, currentTank);

    if (heights[left] < heights[right]) {
      dictObj[heights[left]] = Math.max(dictObj[heights[left]] || 0, currentTank); // todo it can be removed
      left++;
    } else {
      dictObj[heights[right]] = Math.max(dictObj[heights[right]] || 0, currentTank); // todo it can be removed
      right--;
    }
  }

  console.log(dictObj); // todo it can be removed

  return currentMaxTank;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = maxTank(height);
console.log(result); // it should be 49!
