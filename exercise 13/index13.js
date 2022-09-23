let moraSP = confirm("Você mora em São Paulo");
console.log(moraSP);

let ensinoMedio = confirm("Você está no ensino médio");
console.log(ensinoMedio);

if(moraSP == true && ensinoMedio == true){
    document.write("Parabéns! 🎉 Sua matrícula foi aceita.")
}else if (moraSP == false && ensinoMedio == true){
    document.write("😟 Você não pode concluir a matrícula, sua região é muito longe.")
} else if(moraSP == false && ensinoMedio == false) {
    document.write("😟 Você não atende aos requisitos!")
} else {
    document.write("😟 Você não pode concluir a matrícula, sua escolaridade não foi aceita.")
}