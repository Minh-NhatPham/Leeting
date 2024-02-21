const mergeSort = (array) => {
  if (array.length === 1) {
    return;
  }
  const middle = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middle);
  const rightArr = array.slice(middle, array.length);
  mergeSort(leftArr);
  mergeSort(rightArr);
  merge(leftArr, rightArr, array);
  return array;
};

const merge = (leftArr, rightArr, ogArray) => {
  const leftSize = Math.floor(ogArray.length / 2);
  const rightSize = ogArray.length - leftSize;
  let i = 0,
    l = 0,
    r = 0;
  while (l < leftSize && r < rightSize) {
    if (leftArr[l] > rightArr[r]) {
      ogArray[i] = rightArr[r];
      r++;
      i++;
    } else {
      ogArray[i] = leftArr[l];
      l++;
      i++;
    }
  }
  while (l < leftSize) {
    ogArray[i] = leftArr[l];
    i++;
    l++;
  }
  while (r < rightSize) {
    ogArray[i] = rightArr[r];
    i++;
    r++;
  }
};

console.log("output:", mergeSort([5, 7, 3, 1, 2, 1, 1, 3, 6, 7, 2, 10, 2.5, 33]));
