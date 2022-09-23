//exercise 03

let somarbtn = document.querySelector("#somar")

somarbtn.onclick = function(){
    let firstNumber = document.querySelector("#firstNumber").value;
    let secondNumber = document.querySelector("#secondNumber").value;

    somar (parseInt(firstNumber), parseInt(secondNumber));
} 

let subtracaobtn = document.querySelector("#subtracao");

subtracaobtn.onclick = function(){
    let firstNumber = document.querySelector("#firstNumber").value;
    let secondNumber = document.querySelector("#secondNumber").value;

    subtracao (parseInt(firstNumber), parseInt(secondNumber));
}

let multiplicarbtn = document.querySelector("#multiplicar");

multiplicarbtn.onclick = function(){
    let firstNumber = document.querySelector("#firstNumber").value;
    let secondNumber = document.querySelector("#secondNumber").value;

    multiplicar (parseInt(firstNumber), parseInt(secondNumber));
}

let divisaobtn = document.querySelector("#divisao");

divisaobtn.onclick = function(){
    let firstNumber = document.querySelector("#firstNumber").value;
    let secondNumber = document.querySelector("#secondNumber").value;

    divisao(parseInt(firstNumber),parseInt(secondNumber));
}


function somar(x,y){
    document.write(x+y);
}

function multiplicar(x,y){
    document.write(x*y);
}

function divisao(x,y){
    document.write(x/y);
}

function subtracao(x,y){
    document.write(x-y)
}
