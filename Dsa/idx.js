/*************************************************************************************************************
 * Swaps two elements in an array.
 * @param { Array } arr - The array in which elements will be swapped.
 * @param { number } index1 - The index of the first element to be swapped.
 * @param { number } index2 - The index of the second element to be swapped.
 **************************************************************************************************************/

const swap = (arr, x, y) => {
  [arr[x], arr[y]] = [arr[y], arr[x]]
};

/*************************************************************************************************************
 * Sorts an array in ascending order using the bubble sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 **************************************************************************************************************/

const bubbleSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
};

/*************************************************************************************************************
 * Sorts an array in ascending order using the selection sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 **************************************************************************************************************/

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    swap(arr, min, i);
  }

  return arr;
};

/*************************************************************************************************************
 * Sorts an array in ascending order using the insertion sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 **************************************************************************************************************/

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }

  return arr;
};

/*************************************************************************************************************
 * Finds the kth smallest element in an array.
 * @param {Array} arr - The array in which to find the kth smallest element.
 * @param {number} k - The index of the smallest element to find (1-based index).
 * @returns {*} - The kth smallest element.
 **************************************************************************************************************/

const kthSmallestElem = (arr, k) => {
  const sortedArr = bubbleSort(arr);
  return sortedArr[k - 1];
};

/*************************************************************************************************************
 * Finds the maximum sum of a contiguous subarray within the given array.
 * @param {Array} arr - The array to find the maximum sum subarray.
 * @returns {number} - The maximum sum of a contiguous subarray.
 **************************************************************************************************************/

const maxSumSubArr = (arr) => {
  let n = arr.length;
  let ans = 0;
  let maxAns = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < n; i++) {
    if (ans < 0) {
      ans = arr[i];
    } else {
      ans += arr[i];
    }

    if (maxAns < ans) {
      maxAns = ans;
    }
  }
  return maxAns;
};

/*************************************************************************************************************
 * Finds the maximum product of a contiguous subarray within the given array.
 * @param {Array} arr - The array to find the maximum product subarray.
 * @returns {number} - The maximum product of a contiguous subarray.
 **************************************************************************************************************/

const maxProduct = (arr) => {
  let n = arr.length;
  let maxsf = 1;
  let minsf = 1;
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      maxsf = maxsf * arr[i];
      minsf = Math.min(minsf * arr[i], 1);
    } else if (arr[i] == 0) {
      maxsf = 1;
      minsf = 1;
    } else {
      let temp = maxsf;
      maxsf = Math.max(minsf * arr[i], 1);
      minsf = temp * arr[i];
    }
    if (result < maxsf) {
      result = maxsf;
    }
  }
  return result;
};

/*************************************************************************************************************
 * Reverses the elements of the given array.
 * @param {Array} arr - The array to be reversed.
 * @returns {Array} - The reversed array.
 **************************************************************************************************************/

const reverseArr = (arr) => {
  let n = arr.length;
  let i = 0;
  let j = n - 1;
  while (i <= j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
  }
  return arr;
};

/***************************************************************************************************************
 * Interleaves the elements of the given array.
 * @param {Array} arr - The array to be interleaved.
 * @returns {Array} - The interleaved array.
 **************************************************************************************************************/

const interleavingArray = (arr) => {
  let ans = new Array(arr.length);
  let n = arr.length;
  let i = 0;
  let j = n / 2;
  let k = 0;
  while (k < n) {
    ans[k++] = arr[i++];
    ans[k++] = arr[j++];
  }
  return ans;
};

/*************************************************************************************************************
 * Sorts an array containing only 0s, 1s, and 2s in ascending order.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 **************************************************************************************************************/

const sortZeroOneTwo = (arr) => {
  let n = arr.length;
  let i = 0;
  let j = 0;
  let k = n - 1;
  while (j <= k) {
    if (arr[j] == 1) {
      j++;
    } else if (arr[j] == 0) {
      swap(arr, i, j);
      j++;
      i++;
    } else {
      swap(arr, j, k);
      k--;
    }
  }
  return arr;
};

/*************************************************************************************************************
 * Duplicates each occurrence of 0 in the array.
 * @param {Array} arr - The array in which to duplicate zeros.
 * @returns {Array} - The array with duplicated zeros.
 **************************************************************************************************************/

const duplicateZero = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n;) {
    let j = n - 1;
    if (arr[i] == 0 && i < n - 1) {
      while (i < j) {
        arr[j] = arr[j - 1];
        j--;
      }
      i += 2;
    } else {
      i++;
    }
  }
  return arr;
};

module.export = {
  bubbleSort,
  selectionSort,
  insertionSort,
  kthSmallestElem,
  maxSumSubArr,
  maxProduct,
  reverseArr,
  interleavingArray,
  sortZeroOneTwo,
  duplicateZero,
};
