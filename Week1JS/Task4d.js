var votes = [
"Clinton",
   "Trump",
   "Clinton",
   "Clinton",
   "Trump",
   "Trump",
   "Trump",
   "None",
 ]
var initialValue = {}
var reducer = function(voteObj, currentValue) {
  if (!voteObj[currentValue]) {
    voteObj[currentValue] = 1;
  } else {
    voteObj[currentValue] += 1;
  }
  return voteObj;
}
var result = votes.reduce(reducer, initialValue) 
console.log(result)