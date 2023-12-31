/*
2. Only unique items are allowed.
You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements.
*/
function removeDuplicate(arr) {
  return new Set(arr);
}
arr = [11, 12, 14, 56, 23, 67, 31, 77, 11, 12, 31, 77, 67, 1, 25, 33, 25];
newSet = removeDuplicate(arr);
console.log(newSet);
