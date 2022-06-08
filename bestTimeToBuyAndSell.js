const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))