const arr = [3, 2, 8, 6, 9, 1, 3, 2, 5, 4];

const target = 10;

// two sum -> check a possible combination of target via sum

// brute force

function twoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    const val_1 = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      const val_2 = arr[j];

      if (val_1 + val_2 === target) {
        // there a possible secenario for two sum
        console.log('wooooo gotcha', val_1, '&', val_2);
        return true;
      }
    }
  }

  return false;
}

const res1 = twoSum(arr, target);

// optimized two sum

function optimizedTwoSum(arr, target) {
  arr = arr.sort((a, b) => a - b);
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] > target) {
      j--;
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else {
      console.log('gotcha too: ', arr[i], arr[j]);
      return true;
    }
  }
  return false;
}

const res2 = optimizedTwoSum(arr, target);

console.log('two sum res1: ', res1, '\n res2 :', res2);
