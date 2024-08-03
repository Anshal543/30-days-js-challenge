// longest substring without reapeating character

function lengthOfLongestSubstring(x) {
    let start = 0;
    let maxLength = 0;
    let seen = {};
    for (let i = 0; i < x.length; i++) {
        if (seen[x[i]]) {
            start = Math.max(start, seen[x[i]]);
        }
        maxLength = Math.max(maxLength, i - start + 1);
        seen[x[i]] = i + 1; // heep check where we find it last time
    } console.log(seen);
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3