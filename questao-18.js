import {calculadora, getnumber,write} from "./utils/io_utils.js"

//18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 – Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação sobre os dois valores lidos.

function main(){
    write("    ----- CALCULADORA SIMPLES -----\n")
    // Entrada
    write(`
    OPERACOES:
    [1] SOMA
    [2] SUBTRACAO
    [3] MULTIPLICACAO
    [4] DIVISAO
    `)
    
    const opcao = getnumber("    QUAL OPERACAO DESEJA REALIZAR?: ")
    const n1 = getnumber("    NUMERO 1: ")
    const n2 = getnumber("    NUMERO 2: ")

    // Processamento e Saída
    calculadora(n1,n2,opcao)

}

main()