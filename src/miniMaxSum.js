"use stric";

function miniMaxSum(...arr) {
  const minimum = arr.reduce((previus, current) => {
    return previus + current;
  })
  const maximun = arr.reduce((previus, current) => {
    return previus + current;
  })
  console.log(`${minimum - arr[arr.length - 1]} ${maximun - arr[0]}`);
}
miniMaxSum(5, 7,9,8,7);
module.exports = miniMaxSum;