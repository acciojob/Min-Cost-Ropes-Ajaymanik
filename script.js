function mincost(arr)
{ 
let totalCost = 0;

  while (arr.length > 1) {
    arr.sort((a, b) => a - b); // sort in ascending order
    let first = arr.shift(); // smallest rope
    let second = arr.shift(); // second smallest
    let cost = first + second;
    totalCost += cost;
    arr.push(cost); // insert the combined rope back
  }

  return totalCost;
  
}

module.exports=mincost;
