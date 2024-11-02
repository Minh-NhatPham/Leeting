const arr = [5, 4, 1, 2, 6, 6, 7, 3, 8, 7, 10, 9, 9, 8, 0];
const quickSort = (arr, start, end) => {
  if (start >= end) return; //base case

  const pivot = partition(arr, start, end);

  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
};
const partition = (arr, start, end) => {
  let j = start;
  let i = start - 1;
  for (j; j < end; j++) {
    if (arr[j] <= arr[end]) {
      //arr[end] is the pivot
      i++;
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  //https://rphang.me/t/seri-nu-sinh-loli-trung-quoc-p3.192876
  i++;
  let temp = arr[i];
  arr[i] = arr[end];
  arr[end] = temp;

  return i;
};
quickSort(arr, 0, arr.length - 1);
console.log("output", arr);
