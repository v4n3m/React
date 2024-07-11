// Funciones en JS

function saludar(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar('Vegeta'));
console.log(saludar2('Gordito'));
console.log(saludar3('Sandia'));
console.log(saludar4());

const getUser = () => ({

    uid: 'ABC123',
    username: 'user1'

})

const user = getUser();
console.log(user);

// Tarea
// 1.Transformar a funcion Flecha
// 2.Retornar objeto implicito
// 3.Pruebas

// function getUsuarioActivo(nombre) {
//     return {
//         uid:'ABC567',
//         username: nombre
//     }
// };

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Daniela')
console.log(usuarioActivo)