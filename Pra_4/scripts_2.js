function customEquality(str1, str2) {
    return str1 == str2 ? "Equal" : "Not Equal";
  }
  
  // Custom method for strict equality (includes type checking)
  function customStrictEquality(str1, str2) {
    return str1 === str2 ? "Equal" : "Not Equal";
  }
  
  // Custom method for length comparison
  function customLengthComparison(str1, str2) {
    return str1.length === str2.length ? "Same Length" : "Different Length";
  }
  
  // Custom method for alphabetical order comparison (like localeCompare)
  function customAlphabeticalOrder(str1, str2) {
    if (str1 === str2) return "Same";
    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
      if (str1[i] < str2[i]) return "Not Same";
      if (str1[i] > str2[i]) return "Not Same";
    }
    return str1.length < str2.length ? "Not Same" : "Not Same";
  }
  
  // Main function
  function compareStrings() {
    const string1 = document.getElementById("str1").value;
    const string2 = document.getElementById("str2").value;
  
    // Calling custom methods
    const equality = customEquality(string1, string2);
    const strictEquality = customStrictEquality(string1, string2);
    const lengthComparison = customLengthComparison(string1, string2);
    const alphabeticalOrder = customAlphabeticalOrder(string1, string2);
  
    document.getElementById(
      "equalityResult"
    ).innerText = `Equality : ${equality}`;
    document.getElementById(
      "strictEqualityResult"
    ).innerText = `Strict equality : ${strictEquality}`;
    document.getElementById(
      "lengthComparisonResult"
    ).innerText = `Length comparison : ${lengthComparison}`;
    document.getElementById(
      "alphabeticalOrderResult"
    ).innerText = `Alphabetical order : ${alphabeticalOrder}`;
  }
  