
function reverseString() {
    const inputString = document.getElementById("inputStr1").value;
    if (inputString.trim() === "") {
      document.getElementById("reverseRes").innerText = "Enter a valid string.";
    } else {
      const reversed = inputString.split("").reverse().join("");
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
      const replaced = inputString.split(find).join(replace);
      document.getElementById(
        "replaceRes"
      ).innerText = `String after replacement: ${replaced}`;
    }
  }
  
  function checkPalindrome() {
    const inputString = document.getElementById("inputStr3").value;
    if (inputString.trim() === "") {
      document.getElementById("palindromeRes").innerText =
        "Enter a valid string.";
    } else {
      const newString = inputString.replace(/[\W_]/g, "").toLowerCase();
      const isPalindrome = newString === newString.split("").reverse().join("");
      document.getElementById("palindromeRes").innerText = isPalindrome
        ? "Given string is a palindrome."
        : "Given string is NOT a palindrome.";
    }
  }
  