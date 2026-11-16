import { ErrorApp, redondear } from '../utils';

const SALDO_INICIAL = 100;

class UsuarioService {
  private saldos = new Map<string, number>();

  getSaldo(userId: string): number {
    if (!this.saldos.has(userId)) {
      this.saldos.set(userId, SALDO_INICIAL);
    }
    return this.saldos.get(userId)!;
  }

  descontar(userId: string, monto: number): number {
    if (typeof monto !== 'number' || !Number.isFinite(monto) || monto <= 0) {
      throw new ErrorApp(400, 'El monto debe ser un numero mayor a 0');
    }

    const saldo = this.getSaldo(userId);
    if (monto > saldo) {
      throw new ErrorApp(400, 'Saldo insuficiente, solo tienes 100 USD disponibles');
    }

    this.saldos.set(userId, redondear(saldo - monto));
    return this.getSaldo(userId);
  }
}

export const usuarioService = new UsuarioService();
