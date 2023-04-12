const numberOne = Number(prompt("Digite o Primeiro Número."))
const numberTwo = Number(prompt("Digite o Segundo Número."))

console.log("O primeiro numero é maior que o segundo? ", numberOne > numberTwo ? "True" : "False")
console.log("O primeiro numero é igual ao segundo? ", numberOne == numberTwo ? "True" : "False")
console.log("O primeiro numero é divisível pelo segundo? ", numberOne % numberTwo == 0 ? "True" : "False")
console.log("O segundo numero é divisível pelo primeiro? ", numberTwo % numberOne == 0 ? "True" : "False")