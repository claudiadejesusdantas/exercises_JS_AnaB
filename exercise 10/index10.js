let dolar = parseFloat(prompt("Digite o valor em dólares para converter: "));
let cambio = Number(prompt("Digite o valor do câmbio para converter: "));

// let cambio = 0.19039;

let calculo = parseInt(dolar/cambio);

console.log(cambio);


document.write(`O US$ ${dolar} com a taxa de câmbio fixo determinada set/2023, será R$ ${calculo}.`)


//quando é real eu multiplico pelo dólar e quando quero o dólar eu divido pelo real