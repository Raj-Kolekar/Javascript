let array = [];
        let arraySize = 0;

        function initializeArray() {
            arraySize = parseInt(document.getElementById("arraySize").value);
            if (arraySize > 0 && !isNaN(arraySize)) {
                array = new Array(); // Initialize with null values
                updateDisplay(`<strong>Array initialized:</strong> Size ${arraySize}.`);
            } else {
                updateDisplay("Enter valid size");
            }
        }

        function addElement() {
            const newElement = document.getElementById("newElement").value.trim();
            if (array.length < arraySize || arraySize === 0) {
                array.push(newElement);
                updateDisplay(`<strong>Element added:</strong> ${newElement}`);
            } else {
                updateDisplay(`<strong>Error:</strong> Array is full. Cannot add more elements.`);
            }
        }

        function checkElementType() {
            const index = parseInt(document.getElementById("checkIndex").value);
            if (index >= 0 && index < array.length) {
                const parsedElement = parseInput(array[index]);
                const result = `
                    <strong>Element at index ${index}:</strong> ${array[index]}<br>
                    <strong>Is Array?</strong> ${Array.isArray(parsedElement)}<br>
                    
                `;
                updateDisplay(result);
            } else {
                updateDisplay(`<strong>Error:</strong> Invalid index.`);
            }
        }

        function parseInput(input) {
            try {
                return JSON.parse(input);
            } catch {
                return input;
            }
        }

        function updateDisplay(message) {
            document.getElementById("arrayDisplay").innerText = JSON.stringify(array);
            document.getElementById("output").innerHTML = message;
        }