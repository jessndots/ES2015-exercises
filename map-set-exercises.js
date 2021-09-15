// Quick Question #1
// What does the following code return? 

new Set([1,1,2,2,3,4]); // Set {1, 2, 3, 4}



// Quick Question #2
// What does the following code return?

const q2 = [...new Set("referee")].join(""); // 'ref'



// Quick Questions #3
// What does the Map m look like after running the following code?
// {[1,2,3]: true, [1,2,3]: false}

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);



// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => {
    let setArr = new Set([...arr]);
    if (setArr.size === arr.length) {
        return false;
    } else {
        return true;
    }
}

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false



// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str) => {
    const vowelMap = new Map();
    for (let letter of str) {
        if ('aeiouAEIOU'.includes(letter)) {
            if(vowelMap.has(letter)) {
                vowelMap.set(letter, vowelMap.get(letter) + 1)
            } else {
                vowelMap.set(letter, 1)
            }
        }
    }
    return vowelMap;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }