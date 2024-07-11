const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45, //no hay problema con la , cuando finaliza y no viene otro atributo
    direccion: {
        ciudad: 'New York',
        zip: 543215,
        lat: 14.3232,
        lng: 34.598,
    }
};

console.log({persona}); // con esto ayuda a imprimir por consola el nombre de la variable
// console.table(persona);

//const persona2 = persona; //no es lo optimo
const persona2 = {...persona} // clon del objeto persona 

console.log(persona2)