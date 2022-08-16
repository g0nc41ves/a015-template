//Prática guiada - Exercício 1:

// let numero = Number(prompt("Digite um número para somar ou 0 para sair"))

// let soma = 0

// while(numero !==0){
//     soma = soma + numero
//     console.log(numero)
//     numero = Number(prompt("Digite um número para somar ou 0 para sair"))
// }

// console.log("A soma de todos os números: ", soma);

//Prática guiada - Exercício 2:

// let numero = +(prompt("Digite um número para somar ou 0 para sair")) //o + antes do prompt funciona como number.

// for(let i=0; i<=numero; i++){
//     console.log(i)
// }

//Prática guiada - Exercício 3:

// const numeros = [1,2,3,4,5,6,7]

// for (let i=0; i < numeros.length; i++){
//     console.log(`o número do índice ${i} é: ${numeros[i]}`);
// }



//Exercício de fixação:

//Número 1:

// let usuario = prompt("\t\t\t\t\tInsira o seu tipo de usuário:\n\t\t\t\t\t\tA - Administrador\n\t\t\t\t\t\tB - Usuário comum\n\t\t\t\t\t\tC - Usuário assinante").toUpperCase()

// while(usuario !== "A"){
//     alert("Acesso negado")
    
//     usuario = prompt("\t\t\t\t\tInsira o seu tipo de usuário:\n\t\t\t\t\t\tA - Administrador\n\t\t\t\t\t\tB - Usuário comum\n\t\t\t\t\t\tC - Usuário assinante").toUpperCase()
// }
// alert("Bem-vindo, Admin!")

//Número 2:

// let tabuada = 2

// for(let i=1; i<=10;++i)
// {
//     console.log("Resultado: ", i*tabuada)
// }

//Número 3:
// const arrayString = ["daniel"]
// for (let i = 0; i <arrayString.length; i++){
//     console.log(arrayString[0].toUpperCase())
// }