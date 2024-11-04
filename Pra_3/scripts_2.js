function reverseString() {
    const inputString = document.getElementById("inputStr1").value;
    if (inputString.trim() === "") {
      document.getElementById("reverseRes").innerText = "Enter a valid string.";
    } else {
      let reversed = "";
      for (let i = inputString.length - 1; i >= 0; i--) {
        reversed += inputString[i];
      }
      document.getElementById(
        "reverseRes"
      ).innerText = `Reversed String : ${reversed}`;
    }
  }
  
  function replaceChars() {
    const inputString = document.getElementById("inputStr2").value;
    if (inputString.trim() === "") {
      document.getElementById("replaceRes").innerText = "Enter a valid string.";
    } else {
      const find = document.getElementById("findChar").value;
      const replace = document.getElementById("replaceChar").value;
      let replaced = "";
      for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === find) {
          replaced += replace;
        } else {
          replaced += inputString[i];
        }
      }
      document.getElementById(
        "replaceRes"
      ).innerText = `String after replacement : ${replaced}`;
    }
  }
  function checkPalindrome() {
    const inputString = document.getElementById("inputStr3").value;
    if (inputString.trim() === "") {
      document.getElementById("palindromeRes").innerText =
        "Enter a valid string.";
    } else {
      let newString = inputString.toLowerCase();
      let isPalindrome = true;
      for (let i = 0; i < newString.length / 2; i++) {
        if (newString[i] !== newString[newString.length - 1 - i]) {
          isPalindrome = false;
          break;
        }
      }
     document.getElementById("palindromeRes").innerText = isPalindrome
        ? "Given string is a palindrome."
        : "Given string is NOT a palindrome.";
    }
  }
  