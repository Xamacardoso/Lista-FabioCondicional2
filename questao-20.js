import {quad,getnumber,write} from "./utils/io_utils.js"

//20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou quarto) em que o ângulo se localiza.

function main(){
    write("    ----- QUADRANTES DE UM ANGULO -----\n")
    // Entrada
    const angulo = getnumber("    DIGITE UM ÂNGULO (0° a 360°): ")

    // Processamento 
    const quadrante = quad(angulo)

    // Saída
    write(`
    ANGULO = ${angulo}°
    
    O SEU ÂNGULO ESTÁ NO ${quadrante}° QUADRANTE!`)
    
}

main()