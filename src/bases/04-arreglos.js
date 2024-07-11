// Arreglos en JS

// const arreglo = new Array();
//const arreglo = new Array(100); // es muy raro de hacer

const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4); no es muy bueno ya que push modifica el objeto principal

let arreglo2 = [...arreglo,5];
//arreglo2.push(5);

const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;

}); // esto creo un nuevo arreglo, el arreglo 3



console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);