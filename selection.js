const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    for (let j = i; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};
console.log("cc", selectionSort([5, 7, 3, 1, 2, 13, 6, 7, 2, 10, 2.5, 33]));
