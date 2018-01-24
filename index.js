// ----------------------------------------
// Bubble Sort
// ----------------------------------------
function bubbleSort(array) {
  let unsortedLength = array.length;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < unsortedLength - 1; i++) {
      const a = array[i];
      const b = array[i + 1];
      if (a > b) {
        array[i] = b;
        array[i + 1] = a;
        swapped = true;
      }
    }
    unsortedLength--;
  }
  return array;
}


// ----------------------------------------
// Select Sort
// ----------------------------------------
function selectSort(array) {
  let sortedLength = 0;
  const n = array.length;
  while (sortedLength < n - 1) {
    let min = Infinity;
    let minIndex = 0;
    for (let i = sortedLength; i <= n - 1; i++) {
      if (min > array[i]) {
        [min, minIndex] = [array[i], i]
      }
    }

    [
      array[sortedLength],
      array[minIndex]
    ] = [
      array[minIndex],
      array[sortedLength]
    ]

    sortedLength++;
  }

  return array;
}


// ----------------------------------------
// Insert Sort
// ----------------------------------------
function insertSort(array) {
  let i = 1;
  const n = array.length;
  while (i < n) {
    const a = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > a) {
      [
        array[j],
        array[j - 1]
      ] = [
        array[j - 1],
        array[j]
      ];
      j--;
    }
    i++;
  }
  return array;
}


// ----------------------------------------
// Merge Sort
// ----------------------------------------
function mergeSort(array) {
  if (array.length < 2) return array;

  let middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  let result = [];
  while (left.length > 0 && right.length > 0) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  result = result.concat(left.length ? left : right);

  return result;
}


// ----------------------------------------
// Merge Sort Optimized
// ----------------------------------------
function mergeSortOptimized(array) {
  if (array.length < 2) return array;

  const n = array.length;
  let middle = Math.floor(n / 2);
  const left = mergeSortOptimized(array.slice(0, middle));
  const right = mergeSortOptimized(array.slice(middle));

  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const [ l, r ] = [ left[leftIndex], right[rightIndex] ];
    let value;
    if (r < l) {
      value = r;
      rightIndex++;
    } else {
      value = l;
      leftIndex++;
    }
    merged.push(value);
  }

  if (leftIndex < left.length) {
    for (let i = leftIndex; i < left.length; i++) {
      merged.push(left[i]);
    }
  } else {
    for (let i = rightIndex; i < right.length; i++) {
      merged.push(right[i]);
    }
  }

  return merged;
}


// ----------------------------------------
// Quick Sort
// ----------------------------------------
function quickSort(array) {
  const partition = (array, lo, hi) => {
    var pivot = array[hi];
    var i = lo;
    for (var j = lo; j < hi; j++) {
      if (array[j] <= pivot) {
        var a = array[i];
        var b = array[j];
        array[i] = b;
        array[j] = a;
        i++;
      }
    }
    var a = array[i];
    var b = array[hi];
    array[i] = b;
    array[hi] = a;
    return i;
  };

  const qs = (array, lo, hi) => {
    if (lo < hi) {
      var p = partition(array, lo, hi);
      qs(array, lo, p - 1);
      qs(array, p + 1, hi);
    }
  };

  var lo = 0;
  var hi = array.length - 1;
  qs(array, lo, hi);
  return array;
}

// ----------------------------------------
// Count Sort
// ----------------------------------------
function countSort(array) {
  // Avoid empty buckets by using a hash/object
  const counts = {};

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (!counts[num]) {
      counts[num] = 0;
    }
    counts[num]++;
  }

  // No guarantee that keys are sorted so you must sort the keys
  const sortedCounts = Object.keys(counts)
    .map(Number)
    .sort((a, b) => a - b);

  sortedCounts.forEach((num, i) => {
    const value = counts[num];
    for (let j = 0; j < value; j++) {
      array[i] = num;
    }
  });

  return array;
}


// ----------------------------------------
// Radix Sort
// ----------------------------------------
function radixSort(array, base=10) {
  const queues = Array.apply(null, Array(base)).map(() => []);
  let charIndex = 0;
  let noChars = false;
  let hasNegatives = false;

  while (!noChars) {
    const chars = [];

    let i = 0;
    while (i < array.length) {
      const value = array[i].toString();
      const char = value.split('').reverse()[charIndex];

      if (char === '-') {
        hasNegatives = true;
      }

      if (char && queues[+char]) {
        queues[+char].push(array[i]);
        chars.push(char);
      } else {
        queues[0].push(array[i]);
      }
      i++;
    }

    let j = 0;
    let k = 0;
    while (j < queues.length) {
      const q = queues[j];
      while (q.length) {
        array[k] = q.shift();
        k++;
      }
      j++;
    }

    noChars = !!chars.length;
    charIndex++;
  }

  if (hasNegatives) {
    let i = 0;
    while (i < array.length) {
      if (array[i] < 0) {
        const value = array.splice(i, 1);
        array.unshift(value);
      }
      i++;
    }
  }

  return array;
}

module.exports = {
  bubbleSort,
  selectSort,
  insertSort,
  mergeSort,
  mergeSortOptimized,
  quickSort,
  countSort,
  radixSort
};
