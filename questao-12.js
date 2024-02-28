import {getnumber,write,par_ou_impar} from "./utils/io_utils.js"

//12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.

function main(){
    write(" ----- PAR OU IMPAR -----\n")

    const num = getnumber(" QUAL NUMERO DESEJA ANALISAR?: ")
    const par = par_ou_impar(num)
    if (par){
        write(` O NUMERO ${num} é PAR!! `)
    }else{
        write(` O NUMERO ${num} é IMPAR!!!`)
    }
}

main()