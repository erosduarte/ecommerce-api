import { NextFunction, Request, Response } from "express";
import { ErrorApp } from "../utils";


export function autorizadoPorMi(req: Request, _es:Response, next: NextFunction){
    if (req.header("autorizado-por") !== "eros"){
        return next(new ErrorApp(403, "Acceso denegado hacia el catalogo: falta la cabecera autorizado-por: eros"));
    }
    next();
}