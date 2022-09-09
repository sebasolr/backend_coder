//punto uno
const mostrarLista = (lista)=>{
    if(!lista || !lista.length){
        return console.log("lista vacia");
    }
    let mensaje =[];
    lista.forEach(a =>{mensaje +=` ${a}`})
    return mensaje;
}

const arreglo = ["sebar", "valentina", "elias", "Aurora"];

//mostrarLista(arreglo)
//mostrarLista();//retorna lista vacia

/*(
    function(lista){
    if(!lista || !lista.length){
        return console.log("lista vacia");
    }
    let mensaje =[];
    lista.forEach(a =>{mensaje +=` ${a}`})
    return console.log(mensaje);
})([1,2,3]);*/


const crearMultiplicador = (num1) => (num2) => num1 * num2;
const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(2);

console.log('duplicar', duplicar(2));
console.log('triplicar', triplicar(3));
