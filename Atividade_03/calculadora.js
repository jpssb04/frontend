let numero1 = 4;
let operacao = "/";
let numero2 = 2;
let resultado;

switch (operacao) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        if (numero2 != 0) {
            resultado = numero1 / numero2;
        } else {
            resultado = "Erro: Não é possível dividir por zero!";
        }
        break;
    default:
        resultado = "Operação inválida!";
}

console.log("Resultado: " + resultado);