// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
    return v1 + v2;
}
// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
    return v1 - v2;
  }
// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
    return v1 / v2;
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
    return v1 * v2 
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
    if (v1 < 0) {
        return "Erro: Não é possível calcular a raiz quadrada de um número negativo";
    }
    return Math.sqrt(v1);
}


console.log(sum(2, 5));
console.log(sub(5, 6));
console.log(mult(2, 6));
console.log(square(4));
console.log(div(10, 2));

