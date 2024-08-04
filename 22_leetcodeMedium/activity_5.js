// group of anagrams

const groupAnagrams = (strArray) => {
    const map = new Map();
    for (let str of strArray) {
        const sortedStr = str.split('').sort().join('');
        if(!map.has(sortedStr)){
            map.set(sortedStr, [str]);
        }else{
            map.get(sortedStr).push(str);
        }
    }
    // return [...map.values()];
    return Array.from(map.values());
}

// Example usage:
let strArray = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strArray));