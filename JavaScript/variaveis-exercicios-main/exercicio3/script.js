let nome = prompt("Qual o seu nome")
let dataDeNascimento = String(new Date(prompt("Qual a sua data de nascimento? YYYY/MM/DD")))
let endereço = prompt("Qual o seu endereço?")
let cpf = prompt("Qual o seu CPF? 000.000.000-00")
let escolaridade = prompt("Qual a sua escolaridade?")
let cnh = prompt("Possui CNH?")
let possuiQuantosFilhos = Number(prompt("Possui quantos filhos?"))
let cargo = prompt("Qual o seu cargo?")
let salario = Number(prompt("Qual o seu salario?"))
let comissao = prompt("Possui comissão?").toUpperCase()
let anoDeAdmissao = Number(prompt("Qual o seu ano de Admissão?"))
let porcentagemDeComissao = 0

if (comissao == "SIM"){
    porcentagemDeComissao = Number(prompt("Qual a porcentagem de comissão?"))
}


console.log(`Nome: ${nome}\n 
Data de Nascimento: ${dataDeNascimento}\n 
Endereço: ${endereço}\n 
CPF: ${cpf}\n 
Escolaridade: ${escolaridade}\n 
CNH: ${cnh}\n 
Filhos: ${possuiQuantosFilhos}\n 
Cargo: ${cargo}\n 
Salário: ${salario}\n 
Comissão: ${comissao}\n 
Ano de Admissão: ${anoDeAdmissao} 
`)