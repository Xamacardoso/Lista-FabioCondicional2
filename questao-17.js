import {getnumber,write,par_ou_impar} from "./utils/io_utils.js"

//17. Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1 escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4 divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação escreva o quadrado dos números lidos.

function main(){
    write(" ----- SITUAÇÕES COM O RESTO -----\n")
    // Entrada
    const n1 = getnumber("  NUMERO 1: ")
    const n2 = getnumber("  NUMERO 2: ")

    // Processamento e Saída
    if (n1%n2 == 1){
        write(` ${n1} + ${n2} + 1 = ${n1+n2+1}`)
    }else if (n1%n2 == 2){
        const par1 = par_ou_impar(n1)
        const par2 = par_ou_impar(n2) 
        
        if (par1){
            write(` O NUMERO ${n1} é PAR!! `)
        }else{
            write(` O NUMERO ${n1} é IMPAR!!!`)
        }
        if (par2){
            write(` O NUMERO ${n2} é PAR!! `)
        }else{
            write(` O NUMERO ${n2} é IMPAR!!!`)
        }
    }else if (n1%n2 == 3){
        write(` (${n1} + ${n2}) x ${n1} = ${(n1+n2)*n1}`)
    }else if (n1%n2 == 4){
        write(` (${n1} + ${n2}) / ${n2} = ${(n1+n2)/n2}`)
    }else{
        write(` Quadrado de ${n1} = ${n1**2}\n Quadrado de ${n2} = ${n2**2}`)
    }

}

main()