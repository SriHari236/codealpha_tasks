function append(char) {
  document.getElementById('display').value += char;
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch {
    alert("Invalid expression!");
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}
