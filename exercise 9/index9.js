let numero = Number(prompt("Digite a tabuada do: "));
console.log(numero);


let y = 1;


while(y<=10){
    let resultado = numero*y;
    document.write(`${numero} x ${y} = ${resultado}<br>`);
    y = y+1;
}

// for(let y = 1; y<=10; y++){
//     let resultado = numero*y;
//     document.write(`${numero} x ${y} = ${resultado}<br>`);
// }


