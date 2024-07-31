// string algorithm

function countCharacterInString(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        if (count[str[i]]) {
            count[str[i]]++;
        } else {
            count[str[i]] = 1;
        }
    }
    return count;
}

console.log(countCharacterInString("hello"));

function lengthOfLongestSubstring(s) {
    let start = 0;
    let maxLength = 0;
    let seen = {};
    for (let i = 0; i < s.length; i++) {
        if (seen[s[i]]) {
            start = Math.max(start, seen[s[i]]);
        }
        maxLength = Math.max(maxLength, i - start + 1);
        seen[s[i]] = i + 1;
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));