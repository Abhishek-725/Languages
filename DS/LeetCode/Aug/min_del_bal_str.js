// Minimum Deletions to Make String Balanced
// You are given a string s consisting only of characters 'a' and 'b'​​​​.
// You can delete any number of characters in s to make s balanced. s is balanced if 
// there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.
// Return the minimum number of deletions needed to make s balanced.
// Example 1:
// Input: s = "aababbab"
// Output: 2
// Explanation: You can either:
// Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
// Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").

var minimumDeletions = function(str = '') {
    const deletionCount = {
        a : 0,
        b : 0
    };
    let b_occurs = false;
    let j = 0;
    let temp_b_count = 0;

    for (let i = 0; i < str.length - 1; i++) {
        j = i + 1;

        if (str[i] == 'a' && b_occurs) {
            deletionCount.a = deletionCount.a + 1;
            deletionCount.b = deletionCount.b + temp_b_count;
            temp_b_count = 0;
        }

        if ( str[i] == 'b') temp_b_count += 1;
        if (str[i] == 'b' && !b_occurs) b_occurs = true;  
        if (j == str.length - 1 && str[j] == 'a') {
            deletionCount.a = deletionCount.a + 1;
            deletionCount.b = deletionCount.b + temp_b_count;
            temp_b_count = 0;
        }
    }
    return Math.min(deletionCount.a,deletionCount.b);
    
};


console.log(minimumDeletions("aaaaaabbbbabaaaabbabaaabbabbbaaabababaaaaaaabbaaabaaababaaabababa"));


//          ---------------------------------------------------------------

var minimumDeletions2 = function(s) {
    let a_count = 0; // Counts the number of 'a's to the right
    let b_count = 0; // Counts the number of 'b's to the left
    let min_deletions = s.length; // Start with the maximum possible deletions

    // Calculate the total number of 'a's in the string
    for (let char of s) {
        if (char === 'a') a_count++;
    }
    console.log("---a_count---",a_count);
    console.log("--min_deletions--",min_deletions);
    // Iterate through the string and adjust counts to find minimum deletions
    for (let char of s) {
        if (char === 'a') {
            a_count--;
        } else {
            b_count++;
        }
        console.log("--min_deletions bef--",min_deletions);
        min_deletions = Math.min(min_deletions, a_count + b_count);
        console.log("--min_deletions aft--",min_deletions);
    }

    return min_deletions;
};

// console.log(minimumDeletions2("aababbab")); // Output: 2
// console.log(minimumDeletions2("bbaaaaabb")); // Output: 2
