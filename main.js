import Producto from "./clases/productos.js";
import ProductosManager from "./clases/productosManager.js";

const manager = new ProductosManager();

const product1 = new Producto('producto1', 'desc de p1', 20, 'test', 10);
const product2 = new Producto('producto2', 'desc de p2', 10, 'test', 5);

manager.agregarProductos(product1);
manager.agregarProductos(product2);

console.log(manager.getProductos());
console.log(manager.getProductosById(1));