let escolaridade = prompt("Qual a sua escolaridade agora?");
escolaridade = escolaridade.toLowerCase();
console.log(escolaridade);

if (escolaridade === "fundamental 1"){
    document.write("O valor do seu passeio é: R$20,00")
}else if (escolaridade === "fundamental 2"){
    document.write("O valor do seu passeio é: R$40,00")
}else if (escolaridade === "ensino médio" ||  escolaridade === "ensino medio"){
    document.write("O valor do seu passeio é: R$80,00")
} else{
    document.write("Dado inválido.")
    
}
