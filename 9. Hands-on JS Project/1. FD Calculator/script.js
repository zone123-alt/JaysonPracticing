function calculatorMaturityAmount(){
    // Get input value from the form elements
    const principal = parseFloat(document.getElementById('principal').value);
    const interestrate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);
    // perform calculation
const maturityAmount = principal +(principal * interestrate * tenure)/100;
// Display Result
document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}
// Attach the event listener
document.getElementById("calculateBTN").addEventListener('click',calculatorMaturityAmount);