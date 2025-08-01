function updateDisplay(value){
    let result = document.getElementById('displayer');
    result.innerText += value;
}

function clearDisplay() {
    let result = document.getElementById('displayer');
    result.innerText = "";
}

function calculateResult() {
    let result = document.getElementById('displayer');
    try {
        result.innerText = eval(result.innerText);
    } catch (error) {
        result.innerText = "Error";
    }
}