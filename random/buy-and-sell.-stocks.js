// Buys and sell stocks

const prices = [7, 1, 5, 6, 3, 8];

function buyAndSellStocks(prices) {
  // brute force would be check out all the combinations with O(n^2)

  //optimized approach would be a sliding window approach
  let max_diff = 0;
  let n = prices.length;
  let s = 0,
    e = 0;
  let res = 0;

  while (s < n && e < n) {
    let sVal = prices[s];
    let eVal = prices[e];

    if (sVal > eVal) {
      s++;
    } else {
      res = Math.max(res, eVal - sVal);
      e++;
    }
  }
  return res;
}

console.log(buyAndSellStocks(prices));
