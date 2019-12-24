/**
 * Implement a function called countUniqueValues, which accepts a sorted array, 
 * and counts the unique values in the array. There can be negative numbers in the array, 
 * but it will always be sorted.
 * 
 * countUniqueValues([1,1,1,1,1,2])                 // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])    // 7
 * countUniqueValues([])                            // 0
 * countUniqueValues([-2,-1,-1,0,1])                // 4
 */

const countUniqueValues = sortedArray => {
    const sortedArrayLen = sortedArray.length;

    if(sortedArrayLen <= 1 ) {
        return sortedArray.length;
    } 

    let i = 0;
    for(let j = 1; j < sortedArrayLen; ++j) {
        if(sortedArray[i] !== sortedArray[j]) {
            ++i;
            sortedArray[i] = sortedArray[j];
        }
    }

    return i + 1;
};

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([1,2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));