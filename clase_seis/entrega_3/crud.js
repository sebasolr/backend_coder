const { log } = require('console');
const fs = require('fs');
class Productos {
    Producto =""
    constructor(producto) {
        this.producto = `./${producto}.json`// creo el archivo json
    }
    async getAll(){
        try {
        const productos = await fs.promises.readFile(`./${this.producto}`, 'utf8');
        console.log(productos);
        console.log(`Archivo leido con exito!`);    
        const archivoJson = (JSON.parse(productos))
        return archivoJson
        } catch (error) {

            console.error(`no se ha logrado leer el archivo error: ${error.message}`);
        }
    };
    async saveItems(obj){
        try {
            const productos = await this.getAll()
            if(!productos || productos == undefined ){
                obj=[obj];
                obj = JSON.stringify(obj);
                await fs.promises.writeFile(`./${this.producto}`,  obj, 'utf8');
                console.log("Primer Producto Agregado con exito!");
            }else{
               productos.push(obj);
               const archivoString = JSON.stringify(productos)
                
                await fs.promises.writeFile(`./${this.producto}`,  archivoString, 'utf8');
                console.log("Archivo leido y guardado con Exito!");
            }

        } catch (error) {
            console.error(`El archivo no se ha logrado Guardar error:${error}`);
        }
    };
}

module.exports = Productos