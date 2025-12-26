var findMaxConsecutiveOnes = function (nums) {
  let curLength = 0;

  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      curLength = 0;
      continue;
    }
    maxLength = Math.max(maxLength, ++curLength);
  }
  return maxLength;
};
