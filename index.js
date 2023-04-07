/*// Exercício 01
console.log("Exercício 01")
console.log("")
let a = 10
let b = 10

console.log(b)

b = 5

console.log("variavel a,b = " + a,b)
console.log("variavel a+b = " + (a+b))
console.log("variavel a + b = ", a + "b")
console.log("")

//Exercício 02
console.log("Exercício 02")
console.log("")
let x = 10
let y = 20

w = x
y = w
x = y
console.log(x, y, w)
console.log("")

//Exercício 03
console.log("Exercício 03")
console.log("")

let horasTrabalho = prompt("Quantas horas você trabalha por dia?")
let valorDia = prompt("Quanto você recebe por dia?")
let salarioHora = valorDia/horasTrabalho
console.log("Você recebe R$", salarioHora, "por hora")
alert(`Voce recebe R$ ${valorDia/horasTrabalho} por hora`)
alert("Voce recebe R$" + valorDia/horasTrabalho + " por hora")

//Exercícios de escrita de código
console.log("")
console.log("Exercício de escrita de código")
console.log("")
//a) Declare uma variável para armazenar um nome, sem atribuir um valor.

let nome = null
console.log(nome)

//b)Declare uma variável para armazenar uma idade, sem atribuir um valor.
console.log("")
let idade = null
console.log(nome, idade)

//c)Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
alert(typeof idade)
alert(typeof nome)

//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

//e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

nome = prompt("Qual seu nome? ")
idade = prompt("Qual sua idade? ")

//g)Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu

console.log("Olá "+ nome,"você tem "+idade, "anos")
alert('Olá '+ nome + ' você tem '+ idade+" anos")
*/
//Escreva um programa que faça 3 perguntas de Sim ou Não, armazenando em uma variável.
pergunta01 = "Você tem menos de 18 anos? "
pergunta02 = "Você gosta de futebol? "
pergunta03 = "Você torce para o Inter? "

//a)Crie 3 novas variáveis, contendo as respostas
resposta01 = prompt(pergunta01)
resposta02 = prompt(pergunta02)
resposta03 = prompt(pergunta03)

//b)Imprima na tela todas as perguntas seguidas por suas respectivas respostas
console.log(pergunta01,resposta01)
console.log(pergunta02,resposta02)
console.log(pergunta03,resposta03)

alert(pergunta01 + resposta01)
alert(pergunta02 + resposta02)
alert(pergunta03 + resposta03)