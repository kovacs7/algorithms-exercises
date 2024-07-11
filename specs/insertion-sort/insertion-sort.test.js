/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0
    for(let j = i -1 ; j >= 0; j--) {
      if (nums[j] > nums[i - count]){
        let temp = nums[i - count]
        nums[i-count] = nums[j]
        nums[j] = temp
      }
      ++count;
    }
  }
  return (nums)
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [21, -50, -31, -3, 56, 65, 7, 46, -62, -82];
  insertionSort(nums);
  expect(nums).toEqual([-82, -62, -50, -31, -3, 7, 21, 46, 56, 65]);
});