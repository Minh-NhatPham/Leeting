const selectionSort = (array) => {
  let i = 0;
  for (; i < array.length - 1; i++) {
    let minIndex = i,
      j;
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    let temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
  return array;
};
console.log("cc", selectionSort([5, 7, 3, 1, 2, 13, 6, 7, 2, 10, 2.5, 33]));
