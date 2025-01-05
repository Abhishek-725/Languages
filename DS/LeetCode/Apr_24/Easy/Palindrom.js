// /* Given an integer x, return true if x is a palindrome, and false otherwise. */

// var isPalindrome = function(x) {
//     const str = x + '';
//     let reverse = '';
//     for (let index = str.length - 1; index >= 0; index--) {
//         reverse+= str[index];
//     }
//     if (str == reverse) {
//         return true;
//     }
//     return false;
// };

// console.log(isPalindrome(10));


var isPalindrome = function(x) {
    // Special case: negative numbers are not palindromes
    if (x < 0) {
        return false;
    }

    let reversed = 0;
    let original = x;

    while (x > 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }
    return original === reversed;
};

console.log(isPalindrome(-121));

// time complexity =  O(log10(n))