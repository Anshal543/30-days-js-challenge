// string manipulation with recursion

const reverseString = (str)=>{
    if(str===""){
        return "";
    }
    return reverseString(str.slice(1))+str[0];
}

console.log(reverseString("anshal"));
console.log(reverseString("lahsna"));


function checkPalindrom(str){
    if(str.length===0){
        return true;
    }
    if(str[0]===str[str.length-1]){
        return checkPalindrom(str.slice(1,str.length-1));
    }
    return false;
}

console.log(checkPalindrom("w"));
console.log(checkPalindrom("wosw"));

