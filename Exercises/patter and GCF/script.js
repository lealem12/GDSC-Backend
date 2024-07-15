// Triangular star pattern
for (let i = 1; i <= 5; i++) {
    console.log("* ".repeat(i));
}


// GCF Calculator
const GCF = (num1, num2) => {
    let a = Math.max(num1, num2), b = Math.min(num1, num2), r;
    while (b !== 0) {
        r = a % b;
        a = b;
        b = r;
    }
    return b;
}

const num1 = prompt("Please Enter the first num");
const num2 = prompt("Enter the last num");
window.alert(`GCF of ${num1} and ${num2} is: ${GCF(num1, num2)}`);

