var productExceptSelf = function (nums) {
  const zeroes = nums.reduce(
    (count, ele) => (ele === 0 ? count + 1 : count),
    0
  );

  const prod = nums.reduce((pd, ele) => (ele === 0 ? pd : pd * ele), 1);

  return nums.map((ele) => {
    if (zeroes > 1) return 0;
    if (zeroes === 1 && ele === 0) return prod;
    if (zeroes === 1 && ele !== 0) return 0;
    return prod / ele;
  });
};
