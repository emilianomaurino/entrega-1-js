// 1 -NUMERO PAR-IMPAR


 function numeroParImpar(numero){
     if(numero % 2 === 0){
        console.log(`El numero ${numero} es par`);
     } 
     else{
         console.log(`El numero ${numero} es impar`);
     }
 }

 numeroParImpar(20)
 
 numeroParImpar(37)
 numeroParImpar(68)

 


// 2- NUMERO MAYOR - MENOR - IGUAL

function numeroMayorMenorIgual(numeroA, numeroB){
    if(numeroA>numeroB){
        console.log(`El ${numeroA} es mayor que el ${numeroB}`);
    }
    else if(numeroA<numeroB){
        console.log(`El ${numeroB} es mayor que el ${numeroA}`);
    }
    else{
        console.log(`Los numeros ${numeroA} y ${numeroB} son iguales`)}
}

numeroMayorMenorIgual(6, 5)
numeroMayorMenorIgual(6, 10)
numeroMayorMenorIgual(6, 6)



// 3- MULTIPLO DE 5

function multiploDe5(numero){
    if(numero % 5 == 0){
        console.log(`El ${numero} es multiplo de 5`);
    } 
    else{
        console.log(`El ${numero} no es multiplo de 5`);
    }
}

multiploDe5(50)
multiploDe5(32)



// 4- IMPRIMIR NUMEROS

function imprimirNumeros(numero){
    for (let i = 0; numero; i++){
        if(i > numero){
            break;
        }
        console.log(`${i}`)
    }
}
imprimirNumeros(15)



// 5- IMPRIMIR PALABRA

let i= 0

function imprimirPalabra(palabra, numero){
     console.log(palabra.repeat(numero));
}

 imprimirPalabra("hola ", 10)



// esta funcion esta bien? Me imprime la plabra y al lado el numero de veces que lo hace

//  function imprimirPalabra(palabra, numero){
//     while (i < numero){
//         console.log(palabra);
//         i++;
//     }
//  }



// 6- IMPRIMIR ARRAY 

let boca = ["Roman", "Martin", "Guille","10", "9", "7"];

function imprimirArray(lista){
    for(let item of lista){
        console.log(item);
    }
}

imprimirArray(boca)



// 7- IMPRIMIR ARRAY MENOS UNO

let diezNumeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

function imprimirArrayMenosQuinto(lista){
    for(let item of lista){
        if(item === lista[5]){
            continue;
        }
        console.log(item);
    }
}

imprimirArrayMenosQuinto(diezNumeros)



// 8- MULTIPLICACION 

function multiplicacionDeArray(lista, numero){
    for(let item of lista){
        console.log(item*numero);
    }
}


multiplicacionDeArray(diezNumeros, 100)


