let campoAtual = document.getElementById("num1");

document.getElementById("num1").addEventListener("focus",function(){
    campoAtual = this;
});

document.getElementById("num2").addEventListener("focus",function(){
    campoAtual = this;
});

function numeros(numero){
    if(numero === undefined || !campoAtual) return;

    numero = String(numero);

    if(numero ==="." && campoAtual.value.includs(".")){
        return;
    }

    if(numero ==="." && campoAtual.value === ""){
        campoAtual.value = "0.";
        return;

    }

    campoAtual.value += numero;

}

function apagarUltimo(){
    if(!campoAtual) return;

    campoAtual.value = campoAtual.value.slice(0,-1);

}

 
 
 function calcularSoma() {
            // Pega os valores dos inputs e converte para número decimal
            let n1 = parseFloat(document.getElementById('num1').value) || 0;
            let n2 = parseFloat(document.getElementById('num2').value) || 0;

            // Faz a operação matemática básica
            let soma = n1 + n2;

            // Exibe o resultado na tela
            document.getElementById('resultado').innerText = soma;
        }

function calcularSubtrair(){

        let n1 = parseFloat(document.getElementById('num1').value) || 0;
        let n2 = parseFloat(document.getElementById('num2').value) || 0;

        let subtrair = n1 - n2;

        document.getElementById('resultado').innerHTML = subtrair;

}

function calcularMultiplicar(){

        let n1 = parseFloat(document.getElementById('num1').value) || 0;
        let n2 = parseFloat(document.getElementById('num2').value) || 0;

        let multiplicar = n1 * n2 ;

        document.getElementById('resultado').innerHTML = multiplicar;


}

function calcularDividir(){

    let n1 = parseFloat(document.getElementById('num1').value) || 0;
    let n2 = parseFloat(document.getElementById('num2').value) || 0;

    if(n2==0){
        document.getElementById('resultado').innerHTML = "Não é possivel dividir por zero";
        return;
    }

    let dividir = n1 / n2 ;

    document.getElementById('resultado').innerHTML = dividir;

}

function limpar(){

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').innerHTML = '0';

}

function calcularRaizquadrada(){
     let numero = Number(document.getElementById("num1").value);
     
     if(document.getElementById('num1').value ===""){
        alert("Digite um númuero!");
     }

     if(numero < 0){
        alert("Não existe raiz quadrada real de número negativo!");
        return;
     }

     let resultado = Math.sqrt(numero);

     document.getElementById("resultado").textContent = resultado;



}



