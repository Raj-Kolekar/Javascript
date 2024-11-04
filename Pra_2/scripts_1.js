function multiply() {
    let a = parseInt(document.getElementById("num").value);
    if (isNaN(a) ||  a == "") {
      document.getElementById("result").innerHTML = "Please enter a valid number";
    } else {
      document.getElementById("result").innerHTML = ""; // Clear previous results
      for (let i = 1; i <= 10; i++) {
        document.getElementById("result").innerHTML += `${a} * ${i} = ${a * i}<br>`;
      }
    }
  }
  