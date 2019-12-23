/**
 * Write a function called same, which accepts two arrays. 
 * The function should return true if every value in the array has it's corresponding value squared
 * in the second array. The frequency of values must be the same.
 * same([1,2,3], [4,1,9])   // true
 * same([1,2,3], [1,9])     // false
 * same([1,2,1], [4,4,1])   // false (must be same frequency)
 */

// O(n^2) Solution
const detectSameOn2 = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false;
    }

    for(let i = 0; i < arr1.length; ++i) {
        const squareValueIdx = arr2.indexOf(arr1[i] ** 2);
        if(squareValueIdx === -1) {
            return false;
        }
        arr2.splice(squareValueIdx, 1);
    }

    return true;
};

// O(n) Solution
const detectSameOn = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false;
    }

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for(const key of arr1) {
        frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
    }

    for(const key of arr2) {
        frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
    }

    for(const key in frequencyCounter1) {
        if( ! (key ** 2 in frequencyCounter2) ) {
            return false;
        }

        if( frequencyCounter2[key ** 2] !== frequencyCounter1[key] ) {
            return false;
        }
    }
    return true;
};

const result1 = detectSameOn2([3,2,1], [1,4,9]);
const result2 = detectSameOn([3,2,1,3], [1,4,9,9]);

console.log(result1, result2);