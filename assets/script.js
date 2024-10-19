function convertUnits() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;
    let meters;
    
    switch (fromUnit) {
        case 'Meter':
            meters = value;
            break;
        case 'Kilometer':
            meters = value * 1000;
            break;
        case 'Centimeter':
            meters = value / 100;
            break;
    }

    switch (toUnit) {
        case 'Meter':
            result = meters;
            break;
        case 'Kilometer':
            result = meters / 1000;
            break;
        case 'Centimeter':
            result = meters * 100;
            break;
    }

    document.getElementById('result').innerText = result;
}
