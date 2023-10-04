function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
function isPalindrome(word) {
  const reversedArray = word.split('').reverse()
  const reversedString = reversedArray.join('')
  //check if passed string is equal to the reversed string
  if(reversedString === word) {
    return true
  }else {
    return false
  }
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
