var checkSubarraySum = function (nums, k) {
  if (nums.length < 2) return false;
  const map = new Map();
  let sum = 0;
  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    const rem = sum % k;

    if (map.has(rem)) {
      if (i - map.get(rem) >= 2) {
        return true;
      }
    } else {
      map.set(rem, i);
    }
  }
  return false;
};
