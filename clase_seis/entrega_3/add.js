const Productos = require('./crud');
const producto = new Productos('productos')

//   producto.saveItems({ modelo: 'Jordansss', precio: 400, link:'www.jordans.com'
//   })

// producto.saveItems({ modelo:"Convers",precio:200,link:"www.nikeclprod.vteximg.com"
// });
// producto.saveItems({modelo:"Air",precio:300,link:"www.nikeclprod.vteximg.com"
// });
console.log(producto.getAll());

module.exports = producto;