// palindrome

const strInput: string = "madam";
const strLength: number = strInput.length; // 5
let isPalindrome: string = "a palindrome";

for (let i = 1; i <= strLength; i++) {
  if (strInput[strLength - i] !== strInput[i - 1]) {
    isPalindrome = "not a palindrome";
    console.log(strInput[strLength - i] + " X " + strInput[i - 1]);
    break;
  }
  console.log(strInput[strLength - i] + " | " + strInput[i - 1]);
}
console.log(strInput + " is " + isPalindrome);
