"use stric";

function miniMaxSum(...arr) {
  let minimun = 0;
  let maximun = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === arr[arr.length - 1]) continue;
    minimun += element;
  }
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === arr[0]) continue;
    maximun += element;
  }
  return `${minimun} ${maximun}`;
}
module.exports = miniMaxSum;