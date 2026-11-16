import { Router } from "express";
import { productosService } from "../services/product.service"


export const productRoutes = Router();

productRoutes.get("/catalogo", (req,res) =>{
    const catalogo = productosService.getProductos();
    res.json(catalogo); 
})

productRoutes.get("/", (req,res) =>{
    const mensaje = "si funciono";
    res.json(mensaje);
})