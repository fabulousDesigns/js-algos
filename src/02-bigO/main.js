const oddOrEven = (arr) => arr.length % 2 === 0 ? 'even' : 'odd';
// console.log(oddOrEven([1, 2, 3, 4])); // even
// console.log(oddOrEven([1, 2, 3])); // odd
// The time complexity of this function is O(1) because it performs a constant-time operation regardless of the input size. It simply checks the length of the array and determines if it's even or odd, which does not depend on the number of elements in the array.
// The space complexity is also O(1) because it uses a fixed amount of space for the input array and the output string, regardless of the size of the input array.
function calcAverage(arr){
  let sum = 0; 
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}
// console.log(calcAverage([1, 2, 3, 4])); // 2.5
// The time complexity of this function is O(n) because it iterates through the entire array to calculate the sum, where n is the number of elements in the array. The space complexity is O(1) because it uses a fixed amount of space for the sum variable and does not create any additional data structures that grow with the input size.
function findMax(arr){
  let max = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
// console.log(findMax([1, 2, 3, 4])); // 4
// The time complexity of this function is O(n) because it iterates through the entire array
// to find the maximum value, where n is the number of elements in the array. The space complexity is O(1) because it uses a fixed amount of space for the max variable and does not create any additional data structures that grow with the input size.
function findMin(arr){
  let min = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

function commonValuesInArr(arr1, arr2) {
  const set = new Set(arr1);
  for (const ele of set) {
    if (arr2.includes(ele) && set.size === arr2.length) {
      return true;
    }
    // console.log(ele);
    
  }
  // return true ? set === set2 : false; 
 
}

console.log(commonValuesInArr([1, 2, 3], [1, 2, 3])); // true
console.log(commonValuesInArr([1, 2, 3], [1, 2, 8])); // true
console.log(commonValuesInArr([1, 2, 3], [1, 2, 3, 4])); // false

