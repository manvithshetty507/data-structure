function minWindowSubstring(s, t) {
  const tMap = new Map();

  for (let i = 0; i < t.length; i++) {
    const ch = t.charAt(i);
    tMap.has(ch) ? tMap.set(i, tMap.get(ch) + 1) : tMap.set(ch, 1);
  }

  // brute force all sub-array
  let minLength = Infinity;
  let resultString = '';

  for (let i = 0; i < s.length - t.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (j - i >= t.length && j - i < minLength) {
        if (compare(s.substring(i, j + 1))) {
          minLength = j - i;
          resultString = s.substring(i, j + 1);
        }
      }
    }
  }
  return resultString;
}

function compare(s, tMap) {
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);

    if (tMap.has(ch)) {
      tMap.get(ch) === 1 ? tMap.delete(ch) : tMap.set(ch, tMap.get(ch) - 1);
    }
  }
  return tMap.size === 0;
}

// optimized approach
var minWindow = function (s, t) {
  // edge case: if t is longer than s
  if (t.length > s.length) return '';

  // frequency map of characters we need from t
  const need = new Map();
  for (const ch of t) {
    need.set(ch, (need.get(ch) || 0) + 1);
  }

  // track how many unique characters from t we still need
  let required = need.size;

  let left = 0;
  let formed = 0; // count of unique chars that match desired freq in current window
  const windowCounts = new Map();

  // best answer: length and [start, end] indices
  let minLen = Infinity;
  let minStart = 0;

  // expand the window by moving right
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

    // if this char is needed and its count matches the required count, we formed one requirement
    if (need.has(char) && windowCounts.get(char) === need.get(char)) {
      formed++;
    }

    // now try to shrink from the left while the current window is valid
    while (formed === required) {
      // update the best (smallest) window
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }

      // character that we will remove from window
      const leftChar = s[left];
      windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);

      // if removing this char makes it insufficient for the needed count
      if (
        need.has(leftChar) &&
        windowCounts.get(leftChar) < need.get(leftChar)
      ) {
        formed--;
      }

      left++; // shrink from the left
    }
  }

  // if no valid window was ever found, return ""
  return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
};
