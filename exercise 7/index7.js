let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
console.log(nota1,nota2);


let media = (nota1+nota2)/2;

function escrever(texto){
    document.write(texto);
}

escrever(`A primeira nota é ${nota1}, a segunda nota é ${nota2} e sua média é: ${media}`);


