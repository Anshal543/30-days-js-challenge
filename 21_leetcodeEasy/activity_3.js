// palindrome number

function isPalindrome(x) {
  if (x < 0) return false;
  return x === Number(x.toString().split('').reverse().join(''));
}

console.log(isPalindrome(121));
console.log(isPalindrome(10));