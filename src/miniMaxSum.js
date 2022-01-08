"use stric";

function miniMaxSum(...arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(max, min);
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
    console.log(min, max);
    sum += arr[i];
  }
  return `${sum - min} ${sum - max}`;
}
module.exports = miniMaxSum;