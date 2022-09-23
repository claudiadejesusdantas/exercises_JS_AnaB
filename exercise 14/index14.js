let velocidadeCarro = parseInt(prompt("Velocidade do carro:"));
console.log(velocidadeCarro);
let velocidadeMaxima = 80;

if(velocidadeCarro > velocidadeMaxima){
    let calculoMulta = (velocidadeCarro-velocidadeMaxima)*7;
    document.write(`Você foi multado em R$ ${calculoMulta}`);
} 