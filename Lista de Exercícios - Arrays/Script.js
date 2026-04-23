//1//
let filmes = ["Gigantes de aço","Garota Mimada", "Predador"]
console.log(filmes[0])
console.log("=====================================")
console.log("=====================================")
//2//
let frutas = ["lichia","cereja", "morango", "amora", "uva"]
console.log(frutas[2])
console.log("=====================================")
console.log("=====================================")
//3//
let cores = ["preto","cinza", "bordo"]
cores.push("rosa")
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}
console.log("=====================================")
console.log("=====================================")
//4//
let num = ["8","2", "8", "0"]
num.pop()
console.log(num)
console.log("=====================================")
console.log("=====================================")
//5//
let city = ["Filadélfia","Atlanta"]
city.unshift("Miami")
for (let i = 0; i < city.length; i++) {
    console.log(city[i])
}
console.log("=====================================")
console.log("=====================================")
//6//
let animais = ["gato","macaco", "cobra"]
animais.pop()
console.log(animais)
for (let i = 0; i < animais.length; i++) {
    console.log(animais[i])
}
console.log("=====================================")
console.log("=====================================")
//7//
let carros = []

carros.push("Jetta")
carros.push("Golf GTI")
carros.push("Sonata")
carros.push("Camaro")

console.log("Quantidade de carros:", carros.length)
console.log("=====================================")
console.log("=====================================")
//8//
let numeros = [];
numeros.push(10);
numeros.push(20);
numeros.push(30);
numeros.unshift(5);
numeros.pop();
numeros.shift();
console.log("Array final:", numeros);
console.log("Tamanho do array:", numeros.length);
console.log("=====================================")
console.log("=====================================")
//9//
let vetor = new Array(6);
for (let i = 0; i < vetor.length; i++) {
    vetor[i] = i + 1; 
}
for (let i = 0; i < vetor.length; i++) {
    console.log("Posição", i, ":", vetor[i]);
}



