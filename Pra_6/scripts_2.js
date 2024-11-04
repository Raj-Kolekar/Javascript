let arr = [];
let n = 0;

function addElement() {
    n = parseInt(document.getElementById("arraySize").value);
    const newElement = document.getElementById("newElement").value;
  
    if (arr.length < n) {
        arr[arr.length] = newElement;
        document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
    } else {
        document.getElementById("arrayDisplay").innerText = `Array is Filled`;
    }
}

function removeElement() {
    const elementToRemove = document.getElementById("removeElement").value;
    let newArr = [];
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elementToRemove && !found) {
            found = true; 
        } else {
            newArr[newArr.length] = arr[i]; 
        }
    }
    arr = newArr;
    document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
}

function checkValue() {
    const value = document.getElementById("checkValue").value;
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            found = true;
            break;
        }
    }
    document.getElementById("checkResult").innerText = found ? "Value found" : "Value not found";
}

function emptyArray() {
    arr = [];
    document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
}

