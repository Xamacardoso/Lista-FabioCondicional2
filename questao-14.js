import {getnumber,write,maioresmedia5,} from "./utils/io_utils.js"

//14. Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

function main(){
    write(" ----- MAIORES QUE A MEDIA ENTRE 5 NUM -----\n")
    // Entrada
    const num1 = getnumber(" NUMERO 1: ")
    const num2 = getnumber(" NUMERO 2: ")
    const num3 = getnumber(" NUMERO 3: ")
    const num4 = getnumber(" NUMERO 4: ")
    const num5 = getnumber(" NUMERO 5: ")

    // Processamento
    const media = (num1+num2+num3+num4+num5)/5
    const maiores = maioresmedia5(num1,num2,num3,num4,num5,media)
    // Saída
    write(` Media: ${media}\n Valores maiores que a média : ${maiores}`)

}

main()