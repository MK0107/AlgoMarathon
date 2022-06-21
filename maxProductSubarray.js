const maxProductSubarray = (arr) => {
  let max = arr[0];
  let min = arr[0];
  let maxProduct = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let tempMax = max;
    let tempMin = min;

    max = Math.max(Math.max(tempMax * arr[i], tempMin * arr[i]), arr[i]);
    min = Math.min(Math.min(tempMax * arr[i], tempMin * arr[i]), arr[i]);

    maxProduct = Math.max(maxProduct, max);
  }

  return maxProduct;
}

console.log(maxProductSubarray([2, 3, -2, 4])); // 6