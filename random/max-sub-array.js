function maxSubArray(arr) {
  // brute force would be to simulate all subarray O(N^2)

  //optimized approach would be kandane sol

  //make a pre sum array
  let minPrefix = 0;
  let minIndex = -1;
  let maxSum = -Infinity;

  let sum = 0;
  const prefixSum = arr.map((ele) => (sum += ele));

  let start = 0,
    end = 0;

  // O(N) solution
  for (let i = 0; i < arr.length; i++) {
    let currSum = prefixSum[i] - minPrefix;

    if (currSum > maxSum) {
      maxSum = currSum;
      start = minIndex + 1;
      end = i;
    }

    if (prefixSum[i] < minPrefix) {
      minIndex = i;
      minPrefix = prefixSum[i];
    }
  }

  return { maxSum, start, end };
}

console.log(maxSubArray([1, 3, 4, 5, -10, 12]));
