function verificarNumeroPrimo(numPrimo){
    let divisor = 2

    if (numPrimo == 0 || numPrimo == 1){
        return false
    }

    while(numPrimo != 1){
        if (numPrimo % divisor == 0){
            if (divisor != numPrimo){
                return false
            }
            else {
                return true
            }
            numPrimo = numPrimo / divisor
        } else {
            divisor += 1
        }
    }
}

console.log(verificarNumeroPrimo(0)) //false
console.log(verificarNumeroPrimo(1)) //false
console.log(verificarNumeroPrimo(2)) //true
console.log(verificarNumeroPrimo(3)) //true
console.log(verificarNumeroPrimo(7)) //true
console.log(verificarNumeroPrimo(83)) //true
console.log(verificarNumeroPrimo(100)) //false
console.log(verificarNumeroPrimo(991)) //true
console.log(verificarNumeroPrimo(104729)) //true
console.log(verificarNumeroPrimo(14348907)) //false

