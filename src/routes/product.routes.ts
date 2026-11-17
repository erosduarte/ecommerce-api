import { Router } from "express";
import { productosService } from "../services/product.service"


export const productRoutes = Router();

productRoutes.get("/", (req,res) =>{
    const catalogo = productosService.getProductos();
    res.json(catalogo); 
})

