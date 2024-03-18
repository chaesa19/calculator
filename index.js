function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        // Tambahkan kasus untuk operator lain di sini
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}
