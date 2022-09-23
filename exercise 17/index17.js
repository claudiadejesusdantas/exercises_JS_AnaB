let ano = Number(prompt("Digite o ano: "));
console.log(ano);

if(isNaN(ano)){
    document.write("Dado inválido.")
} else if(ano %4==0){
    document.write("Esse ano É bissexto!")
} else {
    document.write("Esse ano NÃO é bissexto!")
} 
