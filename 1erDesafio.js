let numeroUn = 1;
let stringUn = '1';

let numeroTreinta = 30;
let stringTreinta = '30';

let numeroDiez = 10;
let stringDiez = '10';

if (numeroUn == stringUn) {
  console.log('Las variables numeroUno y stringUno tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroUno y stringUno no tienen el mismo valor');
}

if (numeroTreinta === stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

if (numeroDiez == stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}


/* Lo importante de este desafío es entender la diferencia entre los operadores de comparación == y ===.
El operador == compara el valor de las variables, sin importar el tipo de dato.
El operador === compara el valor y el tipo de dato de las variables. */




