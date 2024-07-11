//Desestructuración

const persona = {
    nombre: 'Sandia',
    edad: 0,
    clave: 'Gordito'
};

const {edad, clave, nombre } = persona;

// console.log (persona.nombre)
// console.log(edad);

const u = ({clave, nombre, edad, rango ='Capitán'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, latlng:{lat,lng}} = u(persona);
console.log(nombreClave,anios);
console.log(lat,lng);
