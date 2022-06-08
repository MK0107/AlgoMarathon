const productOfArrayExceptSelf = (nums) => {
  let res = [];
  let prefix = 1;
  let postfix = 1;

  for(let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix = prefix * nums[i];
  }

  for(let i = nums.length-1; i >= 0; i--) {
    res[i] = postfix * res[i];
    postfix = postfix * nums[i];
  }

  return res;
}

console.log(productOfArrayExceptSelf([1, 2, 3, 4]));