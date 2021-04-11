/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array1 = [];
  const array2 = [];
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) array1.push(arr[i]);
  }
  array1.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      array2.push(array1[j]);
      j++;
    } else {
      array2.push(-1);
    }
  }
  return array2;
}

module.exports = sortByHeight;
