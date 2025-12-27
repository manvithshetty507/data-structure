const string = 'ebeas';

function lengthOfLongestSubstringKDistinct(s, k) {
  if (k === 0) return 0;

  let res = 0;
  let left = 0;
  const map = new Map();

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    map.set(ch, (map.get(ch) || 0) + 1);

    while (map.size > k) {
      const leftCh = s[left];
      if (map.get(leftCh) === 1) {
        map.delete(leftCh);
      } else {
        map.set(leftCh, map.get(leftCh) - 1);
      }
      left++;
    }

    res = Math.max(res, right - left + 1);
  }

  return res;
}

0;
console.log(lengthOfLongestSubstringKDistinct('eceba', 2)); // 3 ("ece")
console.log(lengthOfLongestSubstringKDistinct('aa', 1)); // 2 ("aa")
console.log(lengthOfLongestSubstringKDistinct('a', 1)); // 1
console.log(lengthOfLongestSubstringKDistinct('', 2)); // 0
