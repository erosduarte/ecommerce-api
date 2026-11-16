 import { Product } from "../product.model";
 import {Productos} from "../productos"

 class ProductosService{
    
    public getProductos(): Product[]{
        return Productos;
    }

    

 }
     export const productosService = new ProductosService();
