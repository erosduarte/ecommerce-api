import { Request } from 'express';

export function obtenerUsuario(req: Request): string {
  return req.header('x-user-id') ?? 'usuario1';
}
