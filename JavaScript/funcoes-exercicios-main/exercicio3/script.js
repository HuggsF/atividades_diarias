somar = (n1,n2) => {return n1+n2}
subtrair = (n1,n2) => {return n1-n2}
multiplicar = (n1,n2) => {return n1*n2}
dividir = (n1,n2) => {return n1/n2}

const numero1 = Number(prompt("Digite o numero 1"))
const numero2 = Number(prompt("Digite o numero 2"))

let somaTotal = somar(numero1,numero2)
let subtracaoTotal = subtrair(numero1,numero2)
let multiplicacaoTotal = multiplicar(numero1,numero2)
let divisaoTotal = dividir(numero1,numero2)

console.log(somaTotal, " - " ,subtracaoTotal, " - " ,multiplicacaoTotal, " - " ,divisaoTotal)