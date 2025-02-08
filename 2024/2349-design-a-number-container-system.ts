// // 2349. Design a Number Container System
// Design a number container system that can do the following:
//
// Insert or Replace a number at the given index in the system.
//   Return the smallest index for the given number in the system.
//   Implement the NumberContainers class:
//
// NumberContainers() Initializes the number container system.
//   void change(int index, int number) Fills the container at index with the number. If there is already a number at that index, replace it.
//   int find(int number) Returns the smallest index for the given number, or -1 if there is no index that is filled by number in the system.
//
//
//   Example 1:
//
// Input
//   ["NumberContainers", "find", "change", "change", "change", "change", "find", "change", "find"]
//   [[], [10], [2, 10], [1, 10], [3, 10], [5, 10], [10], [1, 20], [10]]
// Output
//   [null, -1, null, null, null, null, 1, null, 2]
//
// Explanation
// NumberContainers nc = new NumberContainers();
// nc.find(10); // There is no index that is filled with number 10. Therefore, we return -1.
// nc.change(2, 10); // Your container at index 2 will be filled with number 10.
// nc.change(1, 10); // Your container at index 1 will be filled with number 10.
// nc.change(3, 10); // Your container at index 3 will be filled with number 10.
// nc.change(5, 10); // Your container at index 5 will be filled with number 10.
// nc.find(10); // Number 10 is at the indices 1, 2, 3, and 5. Since the smallest index that is filled with 10 is 1, we return 1.
// nc.change(1, 20); // Your container at index 1 will be filled with number 20. Note that index 1 was filled with 10 and then replaced with 20.
// nc.find(10); // Number 10 is at the indices 2, 3, and 5. The smallest index that is filled with 10 is 2. Therefore, we return 2.
//
//
// Constraints:
//
//   1 <= index, number <= 109
// At most 105 calls will be made in total to change and find.

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

class NumberContainers {
  private indexMap: Map<number, number>;
  private numberMap: Map<number, Set<number>>;

  constructor() {
    this.indexMap = new Map();
    this.numberMap = new Map();
  }

  change(index: number, number: number): void {
    if (this.indexMap.has(index)) {
      const oldNumber = this.indexMap.get(index)!;
      if (oldNumber !== number) {
        this.numberMap.get(oldNumber)!.delete(index);
        if (this.numberMap.get(oldNumber)!.size === 0) {
          this.numberMap.delete(oldNumber);
        }
      }
    }

    this.indexMap.set(index, number);

    if (!this.numberMap.has(number)) {
      this.numberMap.set(number, new Set());
    }
    this.numberMap.get(number)!.add(index);
  }

  find(number: number): number {
    if (!this.numberMap.has(number) || this.numberMap.get(number)!.size === 0) {
      return -1;
    }
    return Math.min(...this.numberMap.get(number)!);
  }
}

// java solution
// import java.util.*;
//
// class NumberContainers {
//   private Map<Integer, Integer> indexMap;
//   private Map<Integer, TreeSet<Integer>> numberMap;
//
//   public NumberContainers() {
//     this.indexMap = new HashMap<>();
//     this.numberMap = new HashMap<>();
//   }
//
//   public void change(int index, int number) {
//   if (indexMap.containsKey(index)) {
//   int oldNumber = indexMap.get(index);
//   if (oldNumber != number) {
//   numberMap.get(oldNumber).remove(index);
//   if (numberMap.get(oldNumber).isEmpty()) {
//   numberMap.remove(oldNumber);
// }
// }
// }
//
// indexMap.put(index, number);
//
// numberMap.computeIfAbsent(number, k -> new TreeSet<>()).add(index);
// }
//
// public int find(int number) {
//   if (!numberMap.containsKey(number) || numberMap.get(number).isEmpty()) {
//     return -1;
//   }
//   return numberMap.get(number).first();
// }
// }


const obj = new NumberContainers();
obj.change(2, 10);
obj.change(1, 10);
obj.change(3, 10);

