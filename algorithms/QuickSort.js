export function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
}

export function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let index = pivot(arr, left, right);
    quickSort(arr, 0, index - 1);
    quickSort(arr, index + 1, right);
  }
  return arr;
}
