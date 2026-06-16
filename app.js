const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}


// Euro a dólar
const fromEuroToDollar = (valueInEuro) => {
    return valueInEuro * oneEuroIs.USD;
}


// Dólar a yen
const fromDollarToYen = (valueInDollar) => {
    let euro = valueInDollar / oneEuroIs.USD;
    let yen = euro * oneEuroIs.JPY;

    return Number(yen.toFixed(2));
}


// Yen a libra
const fromYenToPound = (valueInYen) => {
    let euro = valueInYen / oneEuroIs.JPY;
    let pound = euro * oneEuroIs.GBP;

    return Number(pound.toFixed(6));
}


// prueba de consola
console.log(sum(7,3))


// IMPORTANTE: aquí tienen que estar las 4 funciones
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};