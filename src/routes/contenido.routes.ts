import { Router } from 'express';
import { contenidoService } from '../services/contenido.service';

export const contenidoRoutes = Router();

contenidoRoutes.get('/home', (req, res) => {
  res.json(contenidoService.getHome());
});

contenidoRoutes.get('/menu', (req, res) => {
  res.json(contenidoService.getMenu());
});

contenidoRoutes.get('/footer', (req, res) => {
  res.json(contenidoService.getFooter());
});