function minOperations(nums1: number[], nums2: number[], k: number): number {
  const arr = nums1.map((v, idx) => v - nums2[idx]);
  const sum = arr.reduce((sum, prev) => sum + prev);
  console.log(arr);
  if (JSON.stringify(nums1) === JSON.stringify(nums2) && k == 0) {
    return 0;
  } else if (sum !== 0 || k == 0) {
    return -1;
  }
  let count: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[i] % k == 0) {
        count += arr[i];
      } else {
        return -1;
      }
    } else {
      if (arr[i] % k !== 0) return -1;
    }
  }
  return count / k;
}
// console.log(minOperations([4,3,1,4], [1,3,7,1], 3)); //2
// console.log(minOperations([15,31,20,3,28,19], [36,31,14,0,34,1], 3)); // 9
// console.log(minOperations([4,3,1,4], [2,3,6,1], 10)); // -1
// console.log(minOperations([1,2,3,4], [1,2,3,4], 0)); // 0
// console.log(minOperations([10,5,15,20], [20,10,15,5], 0)); // -1
// console.log(minOperations([2,2,3,3,6,7], [3,3,4,4,4,5], 2)); // -1
