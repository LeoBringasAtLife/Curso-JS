// console.log("Hola, mundo!");

// var miVar = 45;

// console.log(miVar);

// Le estamos diciendo a la consola que muestre el valor de miVar
// var miVar = 19;
// Mostramos en la consola un mensaje concatenado con el valor de miVar
// console.log('Esta es mi edad el proximo año: ' + (miVar + 1));

// const miConstante = 10;

//var miVar = 19;
//console.log("Mi edad es: " + miVar);

//miVar = 20;
//console.log("mi edad es la siguente el siguiente año: " + miVar);

// const miConstante = 10;
// console.log(miConstante);

// miConstante = 15; // esto genera un error porque las constantes no se pueden modificar nuevamente desde que se declaran.

// const miConst = 19;
// console.log('mi const es: ' + miConst);

// const miConst = 20;
// console.log('mi const modificada es: ' + miConst); // ESTO ES ILEGAAL Y GENERA UN ERROR

// Tipos de datos

var resultado = 5 + 3;
// console.log("Resultado: " + resultado);

// console.log(2 + 2); // Suma
// console.log(5 - 3); // Resta
// console.log(4 * 2); // Multiplicacion
// console.log(8 / 2); // Division
// console.log(5 % 2); // Modulo
// console.log(2 ** 3); // Exponente
// console.log('Hola ' + 'Mundo'); // Concatenacion de cadenas
// console.log('Hola Mundooooooo'.length); // Longitud de cadena
// console.log('Hola'.toUpperCase()); // Mayusculas
// console.log('MUNDO'.toLowerCase()); // Minusculas
// console.log(Math.sqrt(16)); // Raiz cuadrada
// console.log(Math.pow(2, 3)); // Potencia
// console.log(Math.PI); // Valor de PI
// console.log(Math.random()); // Numero aleatorio entre 0 y 1
// console.log(Math.round(4.6)); // Redondeo
// console.log(Math.ceil(4.2)); // Redondeo hacia arriba
// console.log(Math.floor(4.8)); // Redondeo hacia abajo
// console.log(Math.max(3, 7, 2, 9)); // Maximo
// console.log(Math.min(3, 7, 2, 9)); // Minimo
// console.log(Math.abs(-5)); // Valor absoluto
// console.log(Math.sin(Math.PI / 2)); // Seno
// console.log(Math.cos(0)); // Coseno
// console.log(Math.tan(Math.PI / 4)); // Tangente
// console.log(Date.now()); // Timestamp actual

// console.log(new Date().toLocaleDateString()); // Fecha local
// console.log(new Date().toLocaleTimeString()); // Hora local
// console.log(new Date().getFullYear()); // Año actual
// console.log(new Date().getMonth() + 1); // Mes actual (0-11, por eso se suma 1)
// console.log(new Date().getDate()); // Día del mes actual

// var ope1 = 10;
// var ope2 = 5;
// var suma = ope1 + ope2;

// console.log('la suma de los operadores: ' + suma);

// CONDICIONALES

// let edad = 18;
// let resultadoEdad = edad;
// console.log(resultadoEdad);

// if (resultadoEdad >= edad) {
//   console.log('Eres mayor de edad');
// } else {
//   console.log('Eres menor de edad');
// }

// let miNumero 7;
// let resultadoNumero = miNumero;
// console.log(resultadoNumero);

// if (resultadoNumero >= 10) {
//   console.log('El numero es mayor o igual que 10');
// } else {
//   console.log('El numero es menor que 10');
// }

// || es OR
// && es AND

// let test = 7;
// if (test > 0) {
//     console.log('el numero es positivo');
// } else if (test < 0) {
//     console.log('el numero es negativo');
// } else {
//     console.log('el numero es cero');
// }

// REPETITIVOS (CONTADORES) blucle white
// let contador = 0;

// while (contador < 100) {
//   console.log(contador);

//   contador = contador + 1;
// }

// bucle for

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// function saludar(nombre) {
//   console.log('Hola, ' + nombre + '!');
// }

// saludar('Carlos');

// function saludar(nombre, edad) {
//   console.log('nombre y edad: ' + nombre + ' ' + edad);
// }

// saludar('Ana', 25);
// saludar('Luis', 30);
// saludar('Marta', 22);
// saludar('Leonardo Bringas', 45);

// function multiplicar(a, b)

// function multiplicar() {
//   let resultado = 5 * 4;
//   console.log('El resultado de la multiplicacion es: ' + resultado);
// }

// console.log(resultado);

// arreglos o arrays
let frutas = ['Manzana', 'Banana', 'Cereza', 'Durazno'];
for (let i = 0; i < 4; i++) {
  console.log(frutas[i]);
  let mostrar = frutas[i];
}
