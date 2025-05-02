function askForNumber() {
  let number;
  while (true) {
    const input = prompt("Please enter a number:");
    number = parseInt(input);
    if (!isNaN(number)) {
      break;
    }
    alert("That's not a valid number. Please try again.");
  }
  return number;
}

function generateShape(n) {
  const output = [];
  output.push(`Number inputted: ${n}`);

  const getLine = (value, count) =>
    Array(count).fill(String(value).padStart(2, ' ')).join(' ');

  if (n % 2 === 1) {
   
    for (let i = n; i >= 1; i--) {
      output.push(getLine(i, n));
    }
  } else {
    
    for (let i = n; i >= 1; i--) {
      output.push(getLine(i, i));
    }
  }

  return output.join('\n');
}

const number = askForNumber();
const shape = generateShape(number);
document.getElementById('shape-output').textContent = shape;
