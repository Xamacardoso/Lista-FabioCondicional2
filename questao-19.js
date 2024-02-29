import {imc,getnumber,write} from "./utils/io_utils.js"

//19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea (IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).

function main(){
    write("    ----- IMC CORPORAL -----\n")
    // Entrada
    const altura = getnumber("    QUAL É A SUA ALTURA EM METROS?: ")
    const peso = getnumber("    QUANTOS KGs VOCÊ PESA?: ")

    // Processamento 
    const imac = imc(altura,peso)

    // Saída
    write(`
    ALTURA = ${altura.toFixed(2)}m
    PESO   = ${peso.toFixed(2)}kg
    IMC    = ${imac.toFixed(1)}kg/m²
    `)

    if (imac < 25){
        write("    VOCÊ ESTÁ COM PESO NORMAL.")
    }else if (25 <= imac && imac <= 30){
        write("    VOCÊ ESTÁ OBESO!")
    }else {
        write("    VOCÊ ESTÁ OBESO MÓRBIDO!!")
    }
    
}

main()