function extractElements(arr) {
  const [first, second, ...rest] = arr;

  return [first, second, rest.pop()];
}
const arr = [1, 2, 3, 4, 5];
const extractedElements = extractElements(arr);
console.log(extractedElements);
