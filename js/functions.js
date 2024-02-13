const input = document.querySelector('input');
const list = document.querySelector('table');
const todos = [];

function addRow() {
    const newNumber = input.value;
    
    if (!isNaN(newNumber)) {
        todos.push(newNumber);

        const row = list.insertRow();
        const col1 = row.insertCell(0);
        col1.innerHTML = newNumber;

        input.value = '';
    } else {
        alert('Please enter a valid number.');
    }
}
function findMin() {
    if (todos.length === 0) {
        return;
    }
    const minNumber = Math.min(...todos);
    alert(`The minimum number is: ${minNumber}`);
}

function findMax() {
    if (todos.length === 0) {
        return;
    }
    const maxNumber = Math.max(...todos);
    alert(`The maximum number is: ${maxNumber}`);
}

function calculateAverage() {
    if (todos.length === 0) {
        return;
    }
    const sum = todos.reduce((acc, num) => acc + Number(num), 0);
    const average = sum / todos.length;
    alert(`The average is: ${average}`);
}
function sortNumbers() {
    todos.sort((a, b) => a - b);

    while (list.rows.length > 0) {
        list.deleteRow(0);
    }

    for (const number of todos) {
        const row = list.insertRow();
        const col1 = row.insertCell(0);
        col1.innerHTML = number;
    }
}