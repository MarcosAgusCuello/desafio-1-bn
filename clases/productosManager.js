export default class ProductosManager {
    constructor() {
        this.productos = [];
    }


    agregarProductos(producto) {
        console.log(this.productos)
        if(!this.#validateIdCode(producto.codigo)){
            return this.productos.push(producto);  
         }
    }

    getProductos() {
        return this.productos;
    }

    getProductosById(id) {
        const producto = this.productos.find((p) => p.codigo === id);
        if (!producto) {
            console.error("No se encontro el producto")
        }else{
            return producto;
        }
    }

    #validateIdCode(idCode){
        const product = this.productos.filter(product => product.codigo == idCode)
        if(product != ''){
            throw new Error("Id Code exist");
        }else{
            return false;
        }
    }
}