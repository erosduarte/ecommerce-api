export class ErrorApp extends Error {
  constructor(public status: number, mensaje: string) {
    super(mensaje);
  }
}

export function redondear(valor: number): number {
  return Math.round(valor * 100) / 100;
}
