import {question} from "readline-sync";

export function getnumber(mensagem){
    return Number(question(mensagem))
}

export function num_positivo(mensagem){
    const num = get_number(mensagem)
  
    if (num <= 0){
      print('Valor inválido!')
      return num_positivo(mensagem)
    }
  
    return num
}

export function maior3(n1,n2,n3){
    if (n1 >= n2 && n1 > n3){
        return n1
    }else if (n2 >= n1 && n2 > n3){
        return n2
    }else if (n3 >= n1 && n3 > n2){
        return n3
    }else{
        return n1
    } 
}

export function maior2(n1,n2){
    if (n1>n2){
        return n1
    }else{
        return n2
    }
}
export function menor2(n1,n2){
    if (n1<n2){
        return n1
    }else{
        return n2
    }
}

export function e_triangulo(l1,l2,l3){
    return (l1!=0 && l2!=0 && l3!=0 && (l1+l2>l3 || l1+l3>l2 || l2+l3>l1 )  )
}

export function validar_data(d,m,a){
    if(d < 1 || d > 31 || m < 1 || m > 12){
      return false
    }else if(d == 31 && (m == 4 || m == 6 || m == 9 || m == 11)){
      return false
    }else if(m == 2 && d > 29){
      return false
    }else if(m == 2 && d == 29 && a%4 != 0){
      return false
    }else{
    return true
    }
}


export function primo0a100(num){
    for (let i=2; i<num ; i++)
        if (num%i===0){
            return false
        }

    return (num>1)
}

export function write(mensagem){
    console.log(mensagem)
}

export function opcao3(){
    const num1 = getnumber(" NUM. 1: ")
    const num2 = getnumber(" NUM. 2: ")
    const num3 = getnumber(" NUM. 3: ")
    const opcao = getnumber("\n ESCOLHA UMA OPÇÃO, DE 1 a 3: ")
    
    
    if (opcao==1){
        write(`\n O NUMERO ESCOLHIDO FOI ${num1}`)
    }else if (opcao==2){
        write(`\n O NUMERO ESCOLHIDO FOI ${num2}`)
    }else if (opcao==3){
        write(`\n O NUMERO ESCOLHIDO FOI ${num3}`)
    }else{
        write(`\n NUMERO INVÁLIDO!!!`)
        opcao3()
    }
}

export function par_ou_impar(num){
    if (num % 2 ==0){
        return true
    }else{
        return false
    }

}

export function maior5(n1,n2,n3,n4,n5){
    let maior = n1
    if (n2>maior){
        maior = n2
    }
    if (n3>maior){
        maior = n3
    }
    if (n4>maior){
        maior = n4
    }
    if (n5>maior){
        maior = n5
    }
    return maior
}

export function menor5(n1,n2,n3,n4,n5){
    let menor = n1
    if (n2<menor){
        menor = n2
    }
    if (n3<menor){
        menor = n3
    }
    if (n4<menor){
        menor = n4
    }
    if (n5<menor){
        menor = n5
    }
    return menor
}

export function maioresmedia5(n1,n2,n3,n4,n5,media){
    let maiores = ''
    if (n1>media){
        maiores = `${n1}`
    }
    if (n2>media){
        maiores = maiores + `  [${n2}]`
    }
    if (n3>media){
        maiores = maiores + `  [${n3}]`
    }
    if (n4>media){
        maiores = maiores + `  [${n4}]`
    }
    if (n5>media){
        maiores = maiores + `  [${n5}]`
    }
    return maiores
}