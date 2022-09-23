let numero = Number(prompt("Digite um número: "));
console.log(numero);

function escrever(texto){
    document.write(texto)
}

let dobro = numero*2;
let triplo = numero*3;
let raizQuadrada = numero*numero;

escrever(`Analisando o número ${numero}, seu dobro é ${dobro}, o
triplo é ${triplo} e a raiz quadrada é ${raizQuadrada}.`);