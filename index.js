function hasTargetSum(array, target) {
  // Create an empty object to store seen numbers
  const seen = {};

  for (const item of array) {
    // Calculate the difference between the target and the current item
    const difference = target - item;

    // If the difference is in the "seen" object, we found a pair that sums up to the target
    if (seen[difference]) {
      return true;
    }

    // Otherwise, add the current item to the "seen" object
    seen[item] = true;
  }

  // If no pair is found, return false
  return false;
}

/*
  The Big O time complexity of this function is O(n), where n is the length of the input array. 
  It iterates through the array once, performing constant-time operations for each element.
*/

/* 
  Pseudocode:
  1. Create an empty object "seen" to keep track of numbers we have seen.
  2. Iterate through each item in the input array.
  3. Calculate the difference between the target and the current item.
  4. Check if the difference exists in the "seen" object. If it does, return true.
  5. Otherwise, add the current item to the "seen" object.
  6. If no pair is found in the entire loop, return false.

  Written Explanation:
  The function uses a hash table (the "seen" object) to keep track of the numbers encountered so far in the array. For each element in the array, it calculates the difference between the target and the current element. If this difference exists in the "seen" object, it means there's a pair of elements in the array that sum up to the target, so the function returns true. If the loop completes without finding such a pair, it returns false, indicating that no pair with the target sum was found.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
