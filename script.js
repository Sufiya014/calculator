let display = document.getElementById('display');
let history = [];

// Append value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = '';
}

// Calculate the result
function calculateResult() {
    try {
        let result = eval(display.value);
        if (result === undefined || result === null) return;
        display.value = result;
        saveHistory(display.value); // Save calculation to history
    } catch (error) {
        display.value = 'Error';
    }
}

// Save the calculation to history
function saveHistory(result) {
    history.push(result);
    if (history.length > 10) {
        history.shift(); // Keep only the latest 10 calculations
    }
}

// View history page
function viewHistory() {
    let historyList = document.getElementById('historyList');
    historyList.innerHTML = history.map(item => `<div class="mb-2">${item}</div>`).join('');
    document.getElementById('calculator').classList.add('hidden');
    document.getElementById('historyPage').classList.remove('hidden');
}

// Close history page
function closeHistory() {
    document.getElementById('historyPage').classList.add('hidden');
    document.getElementById('calculator').classList.remove('hidden');
}
