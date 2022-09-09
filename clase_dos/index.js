//Tipos de Datos
//Primitivos
const string_="hola"
const numer_=2
//tipo objetos
const array=[1,2,3,4,5]//mala practica poner distintos tipos de datos
let suma =0
array.forEach(a=>{suma += a});

const objeto={
    nombre:'seba',
    edad: 33
}

const function_=()=>{
    console.log("hola");
}

//es6 nuevos tipos de datos
const tipo1="curso"
//no se puede
tipo1="curso de backend" //porque es una const

let tipo2="backend"
tipo2="curso de backend" //si se puede porque es un let / no usar el var porque
//no respeta el scope

//scope / son los valores que se conocen entre las llaves. tienen un orden jerarquico a->adentro
{
    let valor3 =3 //el scope va de afuera hacia adentro
    if (true){
        console.log(valor3);
        const valor4=4; //este valor no puede salir fuera de las llaves
    }
    console.log(valor4); //---> no lo reconoce porque no funciona el scope
}

//diferentes tipos de funciones anonimas y no 
//parametros que recibimos y el resultado

const function_ejemplo = (parametros,cuandoLLamoUnaFuncionEsUnCallBack)=>{//aqui va todo el proceso
//tipo Void no hace nada (como enviar email)
//return esta retorna algo para afuera de la funcion.
};

//en vez de mandar muchos parametros y cuando pueden cambiar, es mejor enviar un objeto en vez de varaibles

//funcion anonima
(function(){ return console.log(2+2);})
//combinacion de funciones anonimas mas declarada
const func_mix =(nombre,cb)=>{
    console.log(nombre);
    cb()
}

func_mix(jose,()=>{console.log('Chao');})

//iife es cuando se auto llama la funcion anonima


//closure es lo que retorna una funcion para reutilizarla

const fx = ()=>{return "jose"}

console.log("hola" +fx());
//se usa para modular, ejemplo 
//facturaciones

const facturar = ()=>{
    const impuesto = getImpuesto(monto,cuit)
    const pdf = generarPdf(impuesto,cuit) //reutilizar el valor es un closure
    return pdf
}
console.log('link de mi factura', facturar);

//template string?
//es la evolucion de las comillas "dobles" 'simples' `comillas invertidas`
const nombre = 'seba'
let texto = "hola como andan \n "
texto += 'muy bien aprendiendo js \n'
texto+="chao."
//con template string 
let texto2 =`Hola como estan 
            ${nombre} vienes a clases? 
            no, no ire.`


//las clases en js, 

class Animal {
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








class Persona  {
    constructor(nombre,instancia){
        this.nombre = nombre;
        this.instancia = instancia;
    }
    static saludoCorto ="holi"

    saludocompleto(){
        console.log("buenas soy " + this.nombre);
    }
    saludoEstatico(){
        console.log(Persona.saludoCorto);
    }
}