/*
Longest Repeating Character Replacement

    You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

    Return the length of the longest substring containing the same letter you can get after performing the above operations.
*/

// brute force
// ---> O(N^2) where we see all possible combination

function longestReplaceString(s, k) {
  // ABBA -> 4 can replace 2 B's

  let maxFreq = 0;
  const freq = {};
  let left = 0;

  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    freq[ch] = (freq[ch] || 0) + 1;

    maxFreq = Math.max(maxFreq, freq[ch]);
    let windowLength = right - left + 1;

    if (windowLength - maxFreq > k) {
      freq[s[left]]--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }
}
