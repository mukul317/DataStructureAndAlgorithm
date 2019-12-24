/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, 
 * such as cinema, formed from iceman.
 * 
 * validAnagram('', '')                             // true
 * validAnagram('aaz', 'zza')                       // false
 * validAnagram('anagram', 'nagaram')               // true
 * validAnagram("rat","car") // false)              // false
 * validAnagram('awesome', 'awesom')                // false
 * validAnagram('qwerty', 'qeywrt')                 // true
 * validAnagram('texttwisttime', 'timetwisttext')   // true
 */

const validAnagram = (str1, str2) => {
    const str1Len = str1.length;
    const str2Len = str2.length;
    
    if(str1Len !== str2Len) {
        return false;
    }

    const charsList = {};

    for(let i = 0; i < str1Len; ++i) {
        const char = str1[i];
        charsList[char] = charsList[char] ? ++charsList[char] : 1;
    }

    for(let i = 0; i < str2Len; ++i) {
        const char = str2[i];
        
        if(!charsList[char]) {
            return false;
        }
        else {
            --charsList[char];
        }
    }

    return true;

    /* This solution includes 3 loops */
    
    // if(str1 === str2) {
    //     return true;
    // }

    // const frequencyCounter1 = {};
    // const frequencyCounter2 = {};

    // for(var i = 0; i < str1.length; ++i) {
    //     const key = str1[i];
    //     frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
    // }

    // for(var i = 0; i < str2.length; ++i) {
    //     const key = str2[i];
    //     frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
    // }

    // // console.log(frequencyCounter1, frequencyCounter2);
    
    // for(const key in frequencyCounter1) {
    //     if( !(key in frequencyCounter2) ) {
    //         return false;
    //     }

    //     if( frequencyCounter2[key] !== frequencyCounter1[key] ) {
    //         return false;
    //     }
    // }

    // return true;
};

console.log(validAnagram('', '')                          );
console.log(validAnagram('aaz', 'zza')                    );
console.log(validAnagram('anagram', 'nagaram')            );
console.log(validAnagram("rat","car")                     );
console.log(validAnagram('awesome', 'awesom')             );
console.log(validAnagram('qwerty', 'qeywrt')              );
console.log(validAnagram('texttwisttime', 'timetwisttext'));  