function isPalindrome(x: number): boolean {
  const arrNum = Array.from(String(x));
  if (x === parseInt(arrNum.reverse().join(""))) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(-121));

// for (let i = 1; i <= lengthStr; i++) {
//   if (inputStr[lengthStr - i] !== inputStr[i - 1]) {
//     isPalindrome = "not a palindrome";
//     break;
//   }
// }
