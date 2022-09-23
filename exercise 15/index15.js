let numero = parseInt(prompt("Digite um número: "));
console.log(numero);

if(numero %2==0){
    document.write("Esse número é par.")
} else if(numero %2==1){
    document.write("Esse número é ímpar.")
} else{
    document.write("Dado inválido!")
}