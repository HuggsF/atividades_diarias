const auxCreche = 91
const comissao = 0.10
const salario = 2000
const descontoInss = 0.05
const vendas = [5784.50,3418.41,4124.10,1874.00,7000.00,9450.00] 
let a = []
let soma = 0
let salarioMutavel = 0
//1.
const salarioFixo = salario + auxCreche - (salario*descontoInss)
console.log(salarioFixo)
//2.
console.log(5784.5*comissao)
//3. e 4.
vendas.forEach(venda => {
    salarioMutavel = salarioFixo - venda*comissao*descontoInss + venda*comissao
    a.push(salarioMutavel)
    console.log(salarioMutavel)
});
//5.
for(var i = 0; i < a.length; i++) {
    soma += a[i];
}
console.log(soma/6)
