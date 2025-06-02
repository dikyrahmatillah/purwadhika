const inputStr: string = "mAdam";
const lengthStr: number = inputStr.length;
let isPalindrome: string = "a palindrome";
// let isPalindrome: string = "";

// for(let i = (strLength - 1); i => 0; i--){
//   isPalindrome += inputStr.charAt(i)
// }

// cnosole.log(str === revStr ? "Palindrome" : "Not palindrome")

for (let i = 1; i <= lengthStr; i++) {
  if (inputStr[lengthStr - i] !== inputStr[i - 1]) {
    isPalindrome = "not a palindrome";
    break;
  }
}
console.log(inputStr + " is " + isPalindrome);
