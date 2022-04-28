//Código JavaScript
/*
Introducción a las variables
 */
/* var nombre = 'Milos';
var apellido = 'Kralicek';
*/
//Pidiendole datos al usuario
/* var nombre = prompt('Indique su nombre')
var apellido = prompt('Indique su apellido')
console.log(nombre);
console.log(apellido);  */
//alert('Bienvenido ' + nombre );
//document.write('<h2>' + 'Bievenido a nuestro sitio web ' + nombre +'  '+ apellido + '</h2>');
// Usando literal string - comillas francesas
//                                                  Interpolación de código
//document.write(`<h2> Bievenido a nuestro sitio web ${nombre} ${apellido}</h2>`);
/*
Operadores:
    Concatenación +
    Asignación =
    Aritméticos + - * / 
    Relacionales < <= > >= == === !=
    Lógicos Y && ó OR || no NOT != !
*/

/*
var valor1 = 100;
var valor2 = 200;
console.log(typeof(valor1));
console.log(typeof(valor2));
//                                               SI         NO
//Trabajando con las condiciones - SI pauta ; positiva ; negativa
//Condición simple - Compuesta
if(valor1 === valor2){
    //console.log(`Si el valor1 ${valor1} es mayor que el valor2 ${valor2}`);
    console.log(valor1 + valor2);
}else{
    var resultado = valor1 * valor2;
    console.log(resultado);
}

var subtitulo = document.getElementById('subtitulo');
subtitulo.innerHTML = 'Espero siempre esten muy bien...'
*/

//                                  Trabajando en la clase 3

//Trabajando con los condicionales anidados

var numero1 = Number(prompt('Indique un número...'));
console.log(typeof (numero1));
var numero2 = Number(prompt('Indique un segundo número...'));
var resultado;
var operación = prompt('¿Qué operación desea hacer? sumar - restar - multiplicar - dividir');
/*
if(operación === 'sumar'){
    resultado = numero1 + numero2;
}else if(operación === 'restar'){
    resultado = numero1 - numero2;
}else if(operación === 'multiplicar'){
    resultado = numero1 * numero2;
}else if(operación === 'dividir'){
    resultado = numero1 / numero2;
}else{
    alert('El dato ingresado no es valido')
}
*/

//Trabajando con Switch

switch (operación) {
    case 'sumar':
        resultado = numero1 + numero2;
        break;
    case 'restar':
        resultado = numero1 - numero2;
        break;

    case 'multiplicar':
        resultado = numero1 * numero2;
        break;

    case 'dividir':
        resultado = numero1 / numero2;
        break;
    default:
        alert('El dato ingresado no es valido')
        break;
}

if (resultado != undefined) {
    alert(`El resultado de la operación ${operación} de los valores ${numero1} y ${numero2} es ${resultado}`);
}





//var subtitulo = document.getElementById('subtitulo');
//var subtitulo = document.querySelector('#subtitulo')
//var subtitulo = document.querySelector('h2')
var subtitulo = document.querySelector('.subtitulo')
console.log(subtitulo);
//subtitulo.innerHTML = `El resultado de la operación ${operación} de los valores ${numero1} y ${numero2} es ${resultado}`
//subtitulo.innerHTML += ` ${operación} de los valores ${numero1} y ${numero2} es ${resultado}`
subtitulo.innerHTML += `<i> ${operación} de los valores ${numero1} y ${numero2} es ${resultado} </i>`; // TEXT No interpreta codigo html
//Aplicando CSS a los elementos capturados
subtitulo.style.color = 'white';
subtitulo.style.textAlign = 'center';
subtitulo.style.fontFamily = 'Arial';
subtitulo.style.backgroundColor = 'tomato';
subtitulo.style.padding = '20px';

