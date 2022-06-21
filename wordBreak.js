var wordBreak = function(s, wordDict) {
  debugger;
  var len = wordDict.length;
  var dp = Array(len);
  var map = {};
  for (var i = 0; i < len; i++) {
    map[wordDict[i]] = true;
  }
  return find(s, map, dp, 0);
};

var find = function (s, map, dp, index) {
  if (dp[index] !== undefined) return dp[index];

  var str = '';
  var res = false;
  var len = s.length;

  if (index === len) return true;

  for (var i = index; i < len; i++) {
    str = s.substring(index, i + 1);
    if (map[str] && find(s, map, dp, i + 1)) {
      res = true;
      break;
    }
  }

  dp[index] = res;
  return res;
};

console.log(wordBreak('leetcode', ['leet', 'code'])) //--> true
// console.log(wordBreak('applepenapple', ['apple', 'pen'])) //--> true
// console.log(wordBreak('catsandog', ["cats","dog","sand","and","cat"])) //--> false