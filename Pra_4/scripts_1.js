function compareStrings() {
    const string1 = document.getElementById("str1").value;
    const string2 = document.getElementById("str2").value;
  
    const equality = string1 == string2 ? "Equal" : "Not Equal";
    const strictEquality = string1 === string2 ? "Equal" : "Not Equal";
    const lengthComparison =
      string1.length === string2.length ? "Same Length" : "Different Length";
    const alphabeticalOrder =
      string1.localeCompare(string2) === 0 ? "Same" : "Not Same";
      const userDefined = string1 == string2 ? "Equal" : "Not Equal";
  
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
    document.getElementById(
      "userDefinedResult"
    ).innerText = `User-Defined Comparison : ${userDefined}`;

}  