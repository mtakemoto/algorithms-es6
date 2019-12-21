function innerBinarySearch(array, key, low, high) {
  if (high < low) return null;
  let mid = midPoint(low, high);

  if (key < array[mid]) {
    return innerBinarySearch(array, key, low, mid - 1);
  } else if (key > array[mid]) {
    return innerBinarySearch(array, key, mid + 1, high);
  } else {
    return mid;
  }
}

function binarySearch(array, key) {
  return innerBinarySearch(array, key, 0, array.length - 1);
}

//Note: division is always floating point in JS so we have to use floor to get integer division.
const midPoint = (low, high) => Math.floor((low + high) / 2);

export { binarySearch, midPoint };
