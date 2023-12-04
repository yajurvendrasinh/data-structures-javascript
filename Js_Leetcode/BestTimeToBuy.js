var maxProfit = function (prices) {
  let buyingPrice = 0;
  let maxProfit = 0;
  let sellingPrice = 1;

  while (sellingPrice < prices.length) {
    if (prices[buyingPrice] < prices[sellingPrice]) {
      let currentProfit = prices[sellingPrice] - prices[buyingPrice];
      maxProfit = Math.max(maxProfit, currentProfit);
    } else {
      buyingPrice = sellingPrice;
    }
    sellingPrice = sellingPrice + 1;
  }

  return maxProfit;
};

// Version 2

var maxProfit = function (prices) {
  let profit = 0;
  let minPrice = Infinity;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    if (prices[i] - minPrice > 0) {
      profit += prices[i] - minPrice;
      minPrice = prices[i];
    }
  }
  return profit;
};
