import { Router } from 'express';
import { usuarioService } from '../services/usuario.service';
import { obtenerUsuario } from '../utils-request';

export const saldoRoutes = Router();

saldoRoutes.get('/', (req, res) => {
  res.json({ saldo: usuarioService.getSaldo(obtenerUsuario(req)) });
});

saldoRoutes.post('/descontar', (req, res) => {
  const saldo = usuarioService.descontar(obtenerUsuario(req), req.body.monto);
  res.json({ saldo });
});
