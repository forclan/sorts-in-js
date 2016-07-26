const mergeSort = array => {
  if (Object.prototype.toString.call(array) !== '[object Array]') {
    Error('input is not a instance of Array');
  }
  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    return array;
  }
  const midIndex = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, midIndex));
  // console.log(left);
  let right = mergeSort(array.slice(midIndex, array.length));
  // console.log(right);
  let fin = mixarray(left, right);
  // console.log(fin);
  return fin;
};

const mixarray = (array1, array2) => {
  let i = 0;
  let j = 0;
  let result = [];
  while(1) {
    if (i === array1.length) {
      result = result.concat(array2.slice(j, array2.length));
      break;
    }
    if (j === array2.length) {
      result = result.concat(array1.slice(i, array1.length));
      break;
    }
    if (array1[i] <= array2[j]) {
      result.push(array1[i++]);
    } else {
      result.push(array2[j++]);
    }
  }
  return result;
}

console.log(mergeSort([123, 23, 12, 53, 13, 5, 6, 45, 1231 ,1923]));
