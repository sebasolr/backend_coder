/*class Animal {
    //atributos
    colorA=""
    patasA=""
    edadA=""
    //metodo reservado para inicialización de atributos constructor
    constructor(color,patas,edad) {
        this.colorA=color,
        this.patasA=patas,
        this.edadA=edad //this hace referencias a mis atributos.
    }
    //metodos

    mover(){
        console.log("caminar");
    }
    serColorA(color) {
        this.colorA=color
    }
    getColorA(){
        return this.colorA;

    }
    misAtributos(){
        console.log(
            `
            tengo color ${this.colorA}
            tengo ${this.patasA} patas
            mi edad es ${this.edadA}
            `
        );

    }
}
//los new llaman siempre a un constructor
const aramis = new Animal("verde","4",33)

aramis.misAtributos()
aramis.serColorA("red")
if(aramis.getColorA()=="red"){
    console.log("si si es red");
}
aramis.misAtributos()

//existe una palabra super que es reservada para las clases, cuando queremos extender metodos de otra clase
*/

class Contador {
    nombre
    cuenta
    constructor(nombre){
        this.nombre=nombre
        this.cuenta=0
    }
    obtenerResponsable(){
        return `soy el responsable ${this.nombre}`
    }
    obtenerCuentaIndividual(){  
        return `mi cuenta es ${this.cuenta}`
}
setCuenta(){
    this.cuenta = this.cuenta+1;
}
}
const contador1=new Contador('seba')
contador1.setCuenta()
contador1.setCuenta()
contador1.setCuenta()
contador1.setCuenta()
console.log(contador1.obtenerCuentaIndividual());
console.log(contador1.obtenerResponsable());
console.log('--------------');
const contador2 = new Contador("pedro")
console.log(contador2.obtenerResponsable());