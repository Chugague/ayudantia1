//alert('Hola Mundo!');

const num = 10;
const str = 'Soy un string';
const bool = true;
const arr = ['texto 1', 'texto 2'];

const obj = {
    nombre: 'objeto',
    numero: 20
}
let nulo = null;

console.log(typeof num, num);
console.log(typeof str, str);
console.log(typeof bool, bool);
console.log(typeof arr, arr);
console.log(typeof obj, obj);
console.log(typeof nulo, nulo); 


let x = 3;
let z = 1;
let y = 5;
let w = 20;

let titulo_1 = document.getElementById('titulo_1');
console.log('Elmento h1', titulo_1);

if ((x <= z && w > y) || w==20){
    titulo_1.innerHTML = 'Entra a la condicion 1';
} else{
    titulo_1.innerHTML = 'Entra a la condicion 2';
}

switch (true){
    case x<4 && x>z:
        console.log('X es menor a 4');
        break;
    case 5:
        console.log('X es igual a 5');
        break;
    case 7:
        console.log('X es igual a 7');
        break;
    case 8:
        console.log('X es igual a 8');
        break;
    default:
        console.log('X no es igual a ninguno de los numeros');
        break;
}

let array1 = [1,4,6,23,54];
let array2 = [[4,2,3],[10,22,34],[53,78,99]];

//Ejemplo de for para llenar una fila de cabecera de una tabla
const tname = ['nombre', 'apellido', 'direccion'];
let t_head_content_start = '<tr>';
const t_head_content_end = '</tr>';

for (let i=0; i < tname.length; i++){
    let th = `<th>${tname[i]}</th>`;
    t_head_content_start += th;
}
t_head_content_start += t_head_content_end;
console.log('start' , t_head_content_start);

t_head.innerHTML = t_head_content_start;

for (let index = 0; index < array1.length; index++) {
    console.log('posicion ',index, 'es ', array1[index]);
}   

for (let i = 0; i < array2.length; i++) {
    console.log('posicion ',i, 'es ', array2[i]);
    for (let j = 0; j < array2.length; j++) {
        console.log('j',j,array2[i][j]);
    }
} 

array2.forEach(i =>{
    console.log(i);
    i.forEach (j=> {
        console.log(j);
    })
})

let persona = {
    nombre: 'Jorge',
    direccion:'Hormazabal',
    telefono:'123',
    email:'123@123.com',
}
//Ejemplo de for in recorriendo un objeto
for(const key in persona){
    console.log(key, persona[key]);  
}

for(const key in array1){
    console.log(key, array1[key]);  
}