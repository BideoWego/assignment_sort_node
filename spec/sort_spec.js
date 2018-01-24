const {
  bubbleSort,
  selectSort,
  insertSort,
  mergeSort,
  mergeSortOptimized,
  quickSort,
  countSort,
  radixSort
} = require('..');

describe('Sorting algorithms', () => {
  let array;
  let answer = [-1, 2, 3, 4, 5, 6, 7, 8, 9];

  beforeEach(() => {
    array = [-1, 9, 2, 8, 3, 7, 4, 6, 5]
  });

  describe('#bubbleSort', () => {
    it('sorts an array', () => {
      const sorted = bubbleSort(array);
      expect(sorted).toEqual(answer);
    });
  });

  describe('#selectSort', () => {
    it('sorts an array', () => {
      const sorted = selectSort(array);
      expect(sorted).toEqual(answer);
    });
  });

  describe('#insertSort', () => {
    it('sorts an array', () => {
      const sorted = insertSort(array);
      expect(sorted).toEqual(answer);
    });
  });

  describe('#mergeSort', () => {
    it('sorts an array', () => {
      const sorted = mergeSort(array);
      expect(sorted).toEqual(answer);
    });
  });

  describe('#mergeSort', () => {
    it('sorts an array', () => {
      const sorted = mergeSortOptimized(array);
      expect(sorted).toEqual(answer);
    });
  });

  describe('#quickSort', () => {
    it('sorts an array', () => {
      const sorted = quickSort(array);
      expect(sorted).toEqual(answer);
    });
  });

  describe('#countSort', () => {
    it('sorts an array', () => {
      const sorted = countSort(array);
      expect(sorted).toEqual(answer);
    });
  });

  describe('#radixSort', () => {
    it('sorts an array', () => {
      const sorted = radixSort(array);
      expect(sorted).toEqual(answer);
    });
  });
});
