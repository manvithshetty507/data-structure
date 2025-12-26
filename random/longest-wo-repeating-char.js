const str = 'abcebadf';

function longWithoutRepeatingCh(str) {
  const map = new Map();
  let maxLen = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (map.has(ch) && map.get(ch) >= start) {
      start = map.get(ch) + 1;
    }

    map.set(ch, i);
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}

console.log(longWithoutRepeatingCh(str));
