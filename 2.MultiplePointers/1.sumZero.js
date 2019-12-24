/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0. 
 * Return an array that includes both values that sum to zero or null if a pair does not exist
 * 
 * sumZero([-3,-2,-1,0,1,2,3])      // [-3,3] 
 * sumZero([-2,0,1,3])              // null
 * sumZero([1,2,3])                 // null
 */


const sumZero = sortedArray => {
    let left = 0;
    let right = sortedArray.length - 1;
    // console.log(left, right);

    while( left < right ) {
        const sum = sortedArray[left] + sortedArray[right];

        if(sum === 0) {
            return [sortedArray[left], sortedArray[right]];
        }
        else if(sum > 0) {
            --right;
        }
        else if(sum < 0) {
            ++left;
        }

        return null;
    }
}; 

console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([-2,0,1,3]));
console.log(sumZero([1,2,3]));