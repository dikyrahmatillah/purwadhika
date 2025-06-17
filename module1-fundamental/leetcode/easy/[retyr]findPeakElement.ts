// function findPeakElement(nums: number[]): number {
//   for (let i = 1; i < nums.length - 1; i++) {
//     if (nums[i] >= nums[i - 1] && nums[i] > nums[i + 1]) return nums[i - 1];
//   }
//   return 0;
// }

// console.log(findPeakElement([1, 3, 3, 3, 3, 3, 3, 3]));

function findPeakElement(nums: number[]): number {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((hi + lo) / 2);
    if (mid == 0) {
      return 0;
    }
    if (nums[mid] > nums[mid - 1] && nums[mid] >= nums[mid + 1]) {
      return nums[mid - 1];
    } else if (nums[mid] <= nums[mid + 1]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
}

// console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1])); //0

// function findPeakElement(nums: number[]): number {
//   if (nums.length === 1) return 0;

//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     console.log(left, mid, right);
//     if (nums[mid] > nums[mid + 1]) {
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return left;
// }
