// import { expect } from 'chai';
var expect = require('chai').expect;
import quickSort from '../src/quick-sort.js';
import mergeSort from '../src/merge-sort.js';
import { generateArraySmallThan100 as generateTestArrayWithLength } from '../src/generateRandomArray.js';

const sortOrigin = (array) => {
  const copy = (array || []).slice();
  return copy.sort((a, b) => a - b);
};

describe('sorts', function() {
  it('quick-sort', function() {
    let array = generateTestArrayWithLength(100);
    expect(quickSort(array)).to.eql(sortOrigin(array));
  });

  it('merge-sort', () => {
    let array = generateTestArrayWithLength(100);
    expect(mergeSort(array)).to.eql(sortOrigin(array));
  })
});
