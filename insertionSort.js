const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let min = array[i];
    let j = i - 1;
    for (; j >= 0 && array[j] > min; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = min;
  }
  return array;
};
console.log("output:", insertionSort([5, 7, 3, 1, 2, 1, 16, 7, 2, 10, 2.5, 33]));
