function multiply() {
    let a = parseInt(document.getElementById("num").value);
    if (isNaN(a) || a == "") {
      document.getElementById("result").innerHTML = "Please enter a valid number";
    } else {
      let i = 1;
      document.getElementById("result").innerHTML = "";
      while (i <= 10) {
        document.getElementById("result").innerHTML += `${a} * ${i} = ${
          a * i
        }<br>`;
        i++;
      }
    }
  }
  