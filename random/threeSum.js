var threeSum = function (nums) {
  let res = [];

  // sort so two-pointer can be applied
  nums.sort((a, b) => a - b);
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    // skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);

        // skip duplicates for j
        while (j < k && nums[j] === nums[j + 1]) j++;
        // skip duplicates for k
        while (j < k && nums[k] === nums[k - 1]) k--;

        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return res;
};
