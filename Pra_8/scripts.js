function changeInputColor() {
    document.getElementById("focusInput").style.backgroundColor = "lightblue";
    document.body.style.backgroundColor = "yellow";
  }
  
  function resetInputColor() {
    document.getElementById("focusInput").style.backgroundColor = "white";
    document.body.style.backgroundColor = "white";
  }
  
  function changeColorOnHover() {
    // Change color of the webpage and the div on hover
    document.body.style.backgroundColor = "lightgreen"; // Change webpage background
    document.getElementById("colorBox").style.backgroundColor = "lightyellow"; // Change div background
  }
  
  function resetColorOnLeave() {
    // Reset both webpage and div color when mouse leaves
    document.body.style.backgroundColor = "white"; // Reset webpage background
    document.getElementById("colorBox").style.backgroundColor = "white"; // Reset div background
  }
    