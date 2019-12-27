/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
 * checks whether there are any duplicates among the arguments passed in 
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * 
 * areThereDuplicates(1, 2, 3)                  // false
 * areThereDuplicates(1, 2, 2)                  // true
 * areThereDuplicates("a", "b", "c", "d", "a")  // true
 */

function areThereDuplicates() {
    const args = Array.prototype.slice.call(arguments).sort();

    let i = 0;
    let j = 1;

    for(; j < args.length; ++j) {
        if(args[i] === args[j]) {
            return true;
        }
        ++i;
    }
    
    return false;
}

console.log(areThereDuplicates("a", "b", "c", "d", "a"));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates(1, 2));
