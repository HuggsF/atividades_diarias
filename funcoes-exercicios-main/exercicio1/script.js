// function area(altura,largura) {
//     const altura = altura
//     const largura = largura
//     const area = altura*largura
//     return area 
// };

// tabuada = (a) => {
//     numero = a
//     for (let index = 1; index <= 10; index++) {
//         console.log(numero*index);
//     }
// };

// tabuada(10);

let numeros = 0
let soma = 0

do{
    numeros = Number(prompt("Digite um número para a soma ou digite 0 para sair."))
    soma += numeros
    console.log(soma)
}while(numeros != 0)