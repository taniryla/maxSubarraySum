// Remember the acronym UPS check

// Step One (Understand). We have to understand the problem.
// 1. What is the unknown?
// the function should calculate the maximum sum of n consecutive elements in the array

// // 2. What are the data inputs?
// array of integers and a number called n

// // 3. Can you restate the problem in your own words?

// n is the number of consecutive spots; find the max value of n spots

// // 4. Can the unknown be determined from the data inputs?
// yes

// // 5. Is the data inputs sufficient to determine the unknown? Insufficient? Redundant? Contradictory?
// yes

// // 6. How should I label important pieces of data input that are a part of the problem?
// arr, n

// // 7. Draw a figure. Introduce suitable notation.
// // 8. Separate the various parts of the condition. Can you write them down?

// // Step Two (Plan). Come up with concrete examples to help you understand the problem better. Find a connection between the data inputs and the unknown. You may be obliged to consider auxiliary problems if an immediate connection cannot be found.
// // 9.  Have you seen it before? Or have you seen the same problem in a slightly different form? Do you know a related problem?
// yes sliding window pattern
// // 10.   Do you know a coding strategy that could be useful? Look at the unknown! And try to think of a familiar problem having the same or a similar unknown. Here is a problem related to yours and solve before. Could you use it? Could you use its result? Could you use its method?
// // 11.    Should you introduce some auxiliary element in order to make its use possible?
// // 12. Start with a simple example. Could you restate the problem? Could you restate it still differently?

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5]), 2);
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5]), 4);

// // 13. What about examples with empty inputs? Any other edge case examples? What examples with invalid inputs?
// // 14. Progress to more complex examples. What is your updated plan here to find a solution?
// // 15. If you still cannot solve the proposed problem, try to solve first some related problem. Could you imagine a more accessible related problem? A more general problem? A more special problem? An analogous problem? Could you solve a part of the problem? Keep only a part of the data inputs, drop the other part; how far is the unknown then determined, how can it vary? Could you derive something useful from the data? Could you think of other data appropriate to determine the unknown? Could you change the unknown or the data, or both if necessary, so that the new unknown and the new data are nearer to each other? Did you use all the data? Did you use the whole of the data inputs? Have you taken into account all essential notions involved in the problem?

// // Step Three (Solve). Carry out your plan of the solution and check each one of your steps in pseudocode.
// // 16.  Can you see clearly that the step is correct?

// see pseudocode below

// IV. 	Step Four (Check). Examine the solution obtained and refactor.
// 17.  Can you check your result?
// 18.  Can you check the argument?
// 19.  Can you derive the result differently?
// 20.  Can you see it at a glance?
// 21.  Can you make the code DRYer and refactor?
// 22.  Can you improve the performance?
// 23.   How have other people solved this problem?

function maxSubarraySum(arr, n) {
  let i = 0;
  let maxSum = 0;
  // iterate through the arr with a for loop
  for (let j = i + n - 1; j < arr.length; j++) {
    // create a variable maxSum and add n elements in the array
    // starting at i
    // if the sum of n elements is greater than max sum
    // update it's value to equal maxSum
    let nSum = arr[i] + arr[i + 1] + arr[i + 2] + arr[j];
    if (nSum > maxSum) {
      maxSum += nSum;
      console.log(nSum);
    }
    i++;
  }
  return maxSum;
}
