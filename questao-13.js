import {getnumber,write,maior5,menor5} from "./utils/io_utils.js"

//13. Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são diferentes.

function main(){
    write(" ----- MAIOR ENTRE 5 NUM -----\n")
    // Entrada
    const num1 = getnumber(" NUMERO 1: ")
    const num2 = getnumber(" NUMERO 2: ")
    const num3 = getnumber(" NUMERO 3: ")
    const num4 = getnumber(" NUMERO 4: ")
    const num5 = getnumber(" NUMERO 5: ")

    // Processamento
    const maior = maior5(num1,num2,num3,num4,num5)
    const menor = menor5(num1,num2,num3,num4,num5)

    // Saída
    write(`\n O maior número entre esses é o ${maior}\n Já o menor número é o ${menor}`)

}

main()