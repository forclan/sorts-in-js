const quickSort = (array) => {
  // arrayCopy = JSON.parse(JSON.stringify(array));
  // use a shallow copy due to the array is consist of numbers
  if (array.length === 1 || array.length === 0) {
    return array;
  }

  if (array.length < 0) {
    Error('length is smaller than 0');
  }

  let arrayCopy = array.slice();
  const midIndex = Math.floor(array.length / 2);
  const midValue = arrayCopy.splice(midIndex, 1);
  const left = [];
  const right = [];
  for (let i = 0, len = arrayCopy.length; i < len; i++) {
    if (arrayCopy[i] <= midValue) {
      left.push(arrayCopy[i]);
    }
    else {
      right.push(arrayCopy[i]);
    }
  }
  return quickSort(left).concat(midValue, quickSort(right));
}

export default quickSort;
