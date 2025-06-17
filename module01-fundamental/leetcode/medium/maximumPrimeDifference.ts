function maximumPrimeDifference(nums: number[]): number {
  const primeNums: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let divider: number = 0;
    for (let j = 1; j <= nums[i]; j++) {
      if (nums[i] % j == 0) divider++;
    }
    if (divider == 2) primeNums.push(i);
  }
  return primeNums[primeNums.length - 1] - primeNums[0];
}

console.log(maximumPrimeDifference([4, 8, 2, 8, 7]));
