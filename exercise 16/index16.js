let distancia = Number(prompt("Digite a distância em km: "));
console.log(distancia);

if(distancia<=200){
    let precoViagemCurta = distancia*0.50;
    document.write(`O preço da sua viagem é ${precoViagemCurta}`);
} else if(distancia>200){
    let precoViagemLonga = distancia*0.45;
    document.write(`O preço da sua viagem é ${precoViagemLonga}`);
}