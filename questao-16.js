import {getnumber,write,maioresmedia5,} from "./utils/io_utils.js"

//16. Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve escreva “Reprovado”.

function main(){
    write(" ----- APROVADO OU REPROVADO -----\n")
    // Entrada
    const nota1 = getnumber("  NOTA 1: ")
    const nota2 = getnumber("  NOTA 2: ")

    // Processamento
    const media = (nota1+nota2)/2
    let situacao
    let mediapospf = media
    if (media >= 7.0){
        situacao = "Aprovado!"
    }else{
        write("\n  Ficou de PROVA FINAL")
        situacao = "Prova Final!"
        const notapf = getnumber("  NOTA DA PF: ")
        mediapospf = (media+notapf)/2
        if (mediapospf >= 5.0){
            situacao = "Aprovado pós PF!"
        }else{
            situacao = "Reprovado"
        }
    }
    // Saída
    write(`\n
  ===== RELATORIO =====
  NOTA 1       = ${nota1.toFixed(2)}
  NOTA 2       = ${nota2.toFixed(2)}
  MEDIA        = ${media.toFixed(2)}
  MEDIA POS PF = ${mediapospf.toFixed(2)}
  SITUACAO     = ${situacao}
  `)

}

main()