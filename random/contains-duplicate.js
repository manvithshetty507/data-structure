const arr = [1, 4, 4, 9, 0, 10, 8];

function hasDuplicate(arr) {
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (set.has(ele)) {
      return true;
    } else {
      set.add(ele);
    }
  }
  return false;
}
